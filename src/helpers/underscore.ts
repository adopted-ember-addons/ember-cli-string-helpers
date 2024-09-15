import { helper } from '@ember/component/helper';
import { underscore as _underscore } from '@ember/string';

import createStringHelperFunction from '../-private/create-string-helper.ts';

export const underscore = createStringHelperFunction(_underscore);
export default helper(underscore);
