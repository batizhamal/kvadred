export function priceFormat(price: string): string {
  price = price.replace(/ /g, "");

  let parts = price.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `${parts.join(".")}`;
}

export const numberWithSpaces = (x: string) => {
  x = x.toString().replace(/ /g, "");

  let parts = x.toString().split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return parts.join(".");
};

export const roundToTwo = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
