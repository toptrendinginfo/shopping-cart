export default function formatCurrency(num) {
  return "₹ " + Number(num).toLocaleString() + " ";
}
