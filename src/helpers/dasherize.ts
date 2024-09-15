import { helper } from '@ember/component/helper';
import { dasherize as _dasherize } from '@ember/string';

import createStringHelperFunction from '../-private/create-string-helper.ts';

export const dasherize = createStringHelperFunction(_dasherize);
export default helper(dasherize);
