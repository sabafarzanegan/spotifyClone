export function convertToFarsi(number: number | undefined) {
  const englishToFarsi = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  // فرمت عدد به صورت ۳ رقمی
  const formattedNumber = new Intl.NumberFormat("fa-IR").format(number);

  return formattedNumber
    .split("")
    .map((digit) => englishToFarsi[digit] || digit)
    .join("");
}
