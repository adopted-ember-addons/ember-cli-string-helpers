import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import dasherize from 'ember-cli-string-helpers/helpers/dasherize';

module('Integration | Helper | {{dasherize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(<template>{{dasherize "andAnother"}}</template>);

    const expected = 'and-another';

    assert.dom().hasText(expected, 'converts camelCase to dasherized');
  });

  test('It converts underscores to dashes', async function (assert) {
    await render(<template>{{dasherize "harry_potter"}}</template>);

    const expected = 'harry-potter';

    assert.dom().hasText(expected, 'converts underscores to dashes');
  });

  test('It converts spaces to dashes', async function (assert) {
    await render(
      <template>
        {{dasherize
          "age is foolish and forgetful when it underestimates youth"
        }}
      </template>,
    );

    const expected =
      'age-is-foolish-and-forgetful-when-it-underestimates-youth';

    assert.dom().hasText(expected, 'correctly dasherizes input with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{dasherize ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{dasherize undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const wizard = htmlSafe('harry_potter');

    await render(<template>{{dasherize wizard}}</template>);

    const expected = 'harry-potter';

    assert.dom().hasText(expected, 'correctly dasherizes a SafeString');
  });
});
