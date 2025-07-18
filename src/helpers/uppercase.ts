import { helper } from '@ember/component/helper';

import uppercaseLib from '../utils/uppercase.ts';
import createStringHelperFunction from '../-private/create-string-helper.ts';

export const uppercase = createStringHelperFunction(uppercaseLib);
export default helper(uppercase);
