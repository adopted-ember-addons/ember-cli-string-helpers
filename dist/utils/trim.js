
function trim(string = '') {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, got a ${typeof string}`);
  }
  return string.trim();
}

export { trim as default };
//# sourceMappingURL=trim.js.map
