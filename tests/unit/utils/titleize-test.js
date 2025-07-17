import titleize from 'dummy/utils/titleize';
import { module, test } from 'qunit';

module('Unit | Utility | titleize', function () {
  test('it titleizes a string', function (assert) {
    let result = titleize('my big fat greek wedding');

    assert.equal(result, 'My Big Fat Greek Wedding');
  });
});
