import { isHTMLSafe } from '@ember/template';

import type { SafeString } from '@ember/template';

export default function (
  stringFunction: (input: string) => string | SafeString,
): (args: [string | SafeString | undefined | null]) => string | SafeString {
  return function ([input]) {
    if (isHTMLSafe(input)) {
      input = input.toString();
    }

    input = input || '';
    return stringFunction(input);
  };
}
