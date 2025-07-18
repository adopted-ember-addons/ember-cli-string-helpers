import { helper } from '@ember/component/helper';
import { camelize as _camelize } from '@ember/string';

import createStringHelperFunction from '../-private/create-string-helper.ts';

export const camelize = createStringHelperFunction(_camelize);
export default helper(camelize);
