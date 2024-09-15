import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import underscore from 'ember-cli-string-helpers/helpers/underscore';

module('Integration | Helper | {{underscore}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(<template>{{underscore "andAnother"}}</template>);

    const expected = 'and_another';

    assert.dom().hasText(expected, 'converts camelCase to underscored');
  });

  test('It converts dashes to underscores', async function (assert) {
    await render(<template>{{underscore "harry-potter"}}</template>);

    const expected = 'harry_potter';

    assert.dom().hasText(expected, 'converts dashes to underscores');
  });

  test('It converts spaces to underscores', async function (assert) {
    await render(
      <template>
        {{underscore
          "age is foolish and forgetful when it underestimates youth"
        }}
      </template>,
    );

    const expected =
      'age_is_foolish_and_forgetful_when_it_underestimates_youth';

    assert.dom().hasText(expected, 'converts spaces to underscores');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{underscore ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{underscore undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const wizard = htmlSafe('harry-potter');

    await render(<template>{{underscore wizard}}</template>);

    const expected = 'harry_potter';

    assert.dom().hasText(expected, 'correctly underscores a SafeString');
  });
});
