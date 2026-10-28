
import { helper } from '@ember/component/helper';
import { isHTMLSafe } from '@ember/template';

const regex = /_+|-+/g;
const replacement = ' ';

// The substituted value will be contained in the result variable
function humanize([string]) {
  if (isHTMLSafe(string)) {
    string = string.toString();
  }
  if (string === undefined || string === null) {
    return '';
  }
  const result = string.toLowerCase().replace(regex, replacement);
  return result.charAt(0).toUpperCase() + result.slice(1);
}
var humanize$1 = helper(humanize);

export { humanize$1 as default };
//# sourceMappingURL=humanize.js.map
