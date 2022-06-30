export default function calcDiffInYearsMonths(d1, d2) {
  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();

  years = years < 0 ? 0 : years;
  months = months < 0 ? 0 : months;

  return { years, months };
}
