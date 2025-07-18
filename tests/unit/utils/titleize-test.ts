import { module, test } from 'qunit';

import titleize from '#src/utils/titleize.ts';

module('Unit | Utility | titleize', function () {
  test('it titleizes a string', function (assert) {
    const result = titleize('my big fat greek wedding');

    assert.strictEqual(result, 'My Big Fat Greek Wedding');
  });
});
