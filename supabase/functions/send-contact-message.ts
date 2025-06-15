
// Supabase Edge Function using Resend to send contact emails.
// IMPORTANT: You'll need to set RESEND_API_KEY as a Supabase secret for this to work.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactMessage = await req.json();

    // Compose HTML email
    const html = `
      <h2>New Contact Message</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
      <p>
        <br/>
        <em>Sent from e-simu contact form, Nairobi, Kenya (EAT)</em>
      </p>
    `;

    const emailResponse = await resend.emails.send({
      from: "e-simu Contact <onboarding@resend.dev>",
      to: ["petersonpro001@gmail.com"],
      subject: `[e-simu] New Contact: ${subject}`,
      reply_to: email,
      html,
    });

    return new Response(
      JSON.stringify({ status: "sent", emailResponse }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-message:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
