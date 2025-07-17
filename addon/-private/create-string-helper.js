import { isHTMLSafe } from '@ember/template';

export default function (stringFunction) {
  return function ([string]) {
    if (isHTMLSafe(string)) {
      string = string.toString();
    }

    string = string || '';
    return stringFunction(string);
  };
}
