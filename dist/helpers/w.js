
import { helper } from '@ember/component/helper';
import { w as w$2 } from '@ember/string';

function w([...wordStrings]) {
  return wordStrings.map(w$2).reduce((words, moreWords) => {
    return words.concat(moreWords);
  }, []);
}
var w$1 = helper(w);

export { w$1 as default };
//# sourceMappingURL=w.js.map
