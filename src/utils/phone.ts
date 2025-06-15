
export const formatPhoneForMpesa = (phone: string): string | null => {
  // Remove non-digits
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10 && cleaned.startsWith('07')) {
    return '254' + cleaned.substring(1);
  }
  if (cleaned.length === 12 && cleaned.startsWith('2547')) {
    return cleaned;
  }
  // Accept 7XXXXXXXX as well
  if (cleaned.length === 9 && cleaned.startsWith('7')) {
    return '254' + cleaned;
  }
  return null;
};
