
import { helper } from '@ember/component/helper';
import { isHTMLSafe } from '@ember/template';

function truncate([string, characterLimit = 140, useEllipsis = true]) {
  const limit = useEllipsis ? characterLimit - 3 : characterLimit;
  if (isHTMLSafe(string)) {
    string = string.toString();
  }
  if (string && string.length > limit) {
    return useEllipsis ? `${string.substring(0, limit)}...` : string.substring(0, limit);
  } else {
    return string;
  }
}
var truncate$1 = helper(truncate);

export { truncate$1 as default };
//# sourceMappingURL=truncate.js.map
