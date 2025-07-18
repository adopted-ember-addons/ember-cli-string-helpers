import { helper } from '@ember/component/helper';
import { classify as _classify } from '@ember/string';

import createStringHelperFunction from '../-private/create-string-helper.ts';

export const classify = createStringHelperFunction(_classify);
export default helper(classify);
