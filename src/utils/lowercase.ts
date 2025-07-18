export default function lowercase(string = '') {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, got a ${typeof string}`);
  }

  return string.toLowerCase();
}
