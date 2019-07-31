export function titleCase(sentence: string): string {
  if (sentence === '') {
    return sentence
  }

  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}