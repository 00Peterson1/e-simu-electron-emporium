
export const formatPhoneForMpesa = (phone: string): string | null => {
  // Remove spaces, dashes, etc.
  let cleaned = phone.replace(/\D/g, '');
  // Handle 07XXXXXXXX or 2547XXXXXXXX formats
  if (cleaned.length === 10 && cleaned.startsWith('07')) {
    return '254' + cleaned.substring(1);
  }
  if (cleaned.length === 12 && cleaned.startsWith('2547')) {
    return cleaned;
  }
  return null; // Invalid format
};
