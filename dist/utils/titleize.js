
function titleize(string = '') {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, got a ${typeof string}`);
  }
  return string.toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function (m) {
    return m.toUpperCase();
  });
}

export { titleize as default };
//# sourceMappingURL=titleize.js.map
