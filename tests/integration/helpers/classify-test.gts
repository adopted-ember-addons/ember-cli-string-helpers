import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import classify from 'ember-cli-string-helpers/helpers/classify';

module('Integration | Helper | {{classify}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(<template>{{classify "andAnother"}}</template>);

    const expected = 'AndAnother';

    assert.dom().hasText(expected, 'classifies camelCased strings');
  });

  test('It converts underscored strings correctly', async function (assert) {
    await render(<template>{{classify "harry_potter"}}</template>);

    const expected = 'HarryPotter';

    assert.dom().hasText(expected, 'classifies underscored strings');
  });

  test('It converts spaces in strings correctly', async function (assert) {
    await render(
      <template>
        {{classify "age is foolish and forgetful when it underestimates youth"}}
      </template>,
    );

    const expected = 'AgeIsFoolishAndForgetfulWhenItUnderestimatesYouth';

    assert.dom().hasText(expected, 'classifies strings with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{classify ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{classify undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const wizard = htmlSafe('harry_potter');

    await render(<template>{{classify wizard}}</template>);

    const expected = 'HarryPotter';

    assert.dom().hasText(expected, 'correctly classifies a SafeString');
  });
});
