export default function captilizeString(str) {
  if (typeof str === "string") {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }
  return str;
}
