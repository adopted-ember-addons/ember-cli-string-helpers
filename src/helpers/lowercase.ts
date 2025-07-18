import { helper } from '@ember/component/helper';

import lowercaseLib from '../utils/lowercase.ts';
import createStringHelperFunction from '../-private/create-string-helper.ts';

export const lowercase = createStringHelperFunction(lowercaseLib);
export default helper(lowercase);
