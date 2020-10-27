export default function formatCurrency(num) {
  return "Rs" + " : " + Number(num.toFixed(0)).toLocaleString() + " ";
}
