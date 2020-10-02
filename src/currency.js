// the value returned by Intl.NumberFormat.format needs to be normalized because
// returns a separator that is not a space
export const toBRL = (string) =>
  Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  })
    .format(string)
    .normalize("NFKC");
