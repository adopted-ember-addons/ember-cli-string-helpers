import { module, test } from 'qunit';

import titleize from 'ember-cli-string-helpers/utils/titleize';

module('Unit | Utility | titleize', function () {
  test('it titleizes a string', function (assert) {
    const result = titleize('my big fat greek wedding');

    assert.strictEqual(result, 'My Big Fat Greek Wedding');
  });
});
