export function titleCase(string) {
  if (typeof string !== 'string') {
    return undefined
  } else if (string === '') {
    return string
  }

  return string
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}