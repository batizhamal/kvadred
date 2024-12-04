export function setMask(value: string, mask: string): string {
  let i = 0;
  let lastReplacedIndex = -1;

  const filledMask = mask.replace(/#/g, (_, j) => {
    if (i >= value.length) {
      return "#";
    }
    lastReplacedIndex = j;
    return value[i++];
  });

  return filledMask.substring(0, lastReplacedIndex + 1);
}
