import { isHTMLSafe } from '@ember/template';

export default function (stringFunction) {
  return function ([string]) {
    if (isHTMLSafe(string)) {
      string = string.string;
    }

    string = string || '';
    return stringFunction(string);
  };
}
