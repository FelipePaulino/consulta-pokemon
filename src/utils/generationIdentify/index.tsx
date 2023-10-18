export default function generationIdentify(number: number) {
  if (number <= 151) {
    return 1;
  }
  if (number <= 251) {
    return 2;
  }
  if (number <= 386) {
    return 3;
  }
  if (number <= 493) {
    return 4;
  }
  if (number <= 649) {
    return 5;
  }
  if (number <= 721) {
    return 6;
  }
  if (number <= 809) {
    return 7;
  }
  if (number <= 890) {
    return 8;
  }
  return 9;
}
