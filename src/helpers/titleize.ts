import { helper } from '@ember/component/helper';

import titleizeLib from '../utils/titleize.ts';
import createStringHelperFunction from '../-private/create-string-helper.ts';

export const titleize = createStringHelperFunction(titleizeLib);
export default helper(titleize);
