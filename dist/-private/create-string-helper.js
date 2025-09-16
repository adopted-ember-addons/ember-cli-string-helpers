
import { isHTMLSafe } from '@ember/template';

function createStringHelperFunction (stringFunction) {
  return function ([input]) {
    if (isHTMLSafe(input)) {
      input = input.toString();
    }
    input = input || '';
    return stringFunction(input);
  };
}

export { createStringHelperFunction as default };
//# sourceMappingURL=create-string-helper.js.map
