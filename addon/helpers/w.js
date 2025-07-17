import { helper } from '@ember/component/helper';
import { w as toWords } from '@ember/string';

export function w([...wordStrings]) {
  return wordStrings.map(toWords).reduce((words, moreWords) => {
    return words.concat(moreWords);
  }, []);
}

export default helper(w);
