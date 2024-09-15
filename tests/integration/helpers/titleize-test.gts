import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import titleize from 'ember-cli-string-helpers/helpers/titleize';

module('Integration | Helper | {{titleize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It titleizes a string', async function (assert) {
    await render(<template>{{titleize "my big fat greek wedding"}}</template>);

    const expected = 'My Big Fat Greek Wedding';

    assert.dom().hasText(expected, 'titleized value');
  });

  test('It handles undefined', async function (assert) {
    const nostring = '';
    await render(<template>{{titleize nostring}}</template>);

    assert.dom().hasText('', 'No value');
  });

  test('It handles null', async function (assert) {
    const value = null;

    await render(<template>{{titleize value}}</template>);

    assert.dom().hasText('', 'No value');
  });

  test('It handles a SafeString', async function (assert) {
    const title = htmlSafe('my big fat greek wedding');

    await render(<template>{{titleize title}}</template>);

    const expected = 'My Big Fat Greek Wedding';

    assert.dom().hasText(expected, 'correctly titleizes a SafeString');
  });
});
