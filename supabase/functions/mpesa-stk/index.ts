
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface StkRequest {
  phone: string;
  amount: number;
  orderId?: string;
}

const SHORT_CODE = "174379"; // Change to your shortcode if needed
const PASSKEY = "bfb279f9aa9bdbcf113b0b8b0a60ed2b";// Use the official passkey for your shortcode in production

const BASE_URL = "https://sandbox.safaricom.co.ke";

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: StkRequest = await req.json();

    const { phone, amount } = body;
    if (!phone || !amount) {
      return new Response(JSON.stringify({ error: "Missing phone or amount" }), { status: 400, headers: corsHeaders });
    }

    // Step 1: Get OAuth access token
    const consumerKey = Deno.env.get("MPESA_CONSUMER_KEY");
    const consumerSecret = Deno.env.get("MPESA_CONSUMER_SECRET");
    const auth = btoa(`${consumerKey}:${consumerSecret}`);

    const authRes = await fetch(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
      method: "GET",
      headers: { Authorization: `Basic ${auth}` },
    });

    const authData = await authRes.json();
    if (!authData.access_token) {
      return new Response(JSON.stringify({ error: "Failed to authenticate with M-Pesa" }), { status: 500, headers: corsHeaders });
    }

    // Step 2: Initiate STK Push
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
    const password = btoa(`${SHORT_CODE}${PASSKEY}${timestamp}`);

    const stkPayload = {
      BusinessShortCode: SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: SHORT_CODE,
      PhoneNumber: phone,
      CallBackURL: "https://example.com/callback", // For now, fake, unless you want to set a real endpoint
      AccountReference: "e-simu",
      TransactionDesc: "Purchase at e-simu"
    };

    const stkRes = await fetch(`${BASE_URL}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authData.access_token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stkPayload),
    });

    const stkData = await stkRes.json();

    if (stkData.errorMessage) {
      return new Response(JSON.stringify({ error: stkData.errorMessage }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify(stkData), { headers: { "Content-Type": "application/json", ...corsHeaders } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
  }
});
