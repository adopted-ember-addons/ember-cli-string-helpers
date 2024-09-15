import { helper } from '@ember/component/helper';

import trimLib from '../utils/trim.ts';
import createStringHelperFunction from '../-private/create-string-helper.ts';

export const trim = createStringHelperFunction(trimLib);
export default helper(trim);
