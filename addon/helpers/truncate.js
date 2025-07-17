import { helper } from '@ember/component/helper';
import { isHTMLSafe } from '@ember/template';

export function truncate([string, characterLimit = 140, useEllipsis = true]) {
  let limit = useEllipsis ? characterLimit - 3 : characterLimit;

  if (isHTMLSafe(string)) {
    string = string.toString();
  }

  if (string && string.length > limit) {
    return useEllipsis
      ? `${string.substring(0, limit)}...`
      : string.substring(0, limit);
  } else {
    return string;
  }
}

export default helper(truncate);
