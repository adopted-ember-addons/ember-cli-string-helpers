import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import camelize from 'ember-cli-string-helpers/helpers/camelize';

module('Integration | Helper | {{camelize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It maintains camelCase correctly', async function (assert) {
    await render(<template>{{camelize "andAnother"}}</template>);

    const expected = 'andAnother';

    assert.dom().hasText(expected, 'maintains camelCase');
  });

  test('It converts underscores to camelCase', async function (assert) {
    await render(<template>{{camelize "harry_potter"}}</template>);

    const expected = 'harryPotter';

    assert.dom().hasText(expected, 'converts underscores to camelCase');
  });

  test('It converts dashes to camelCase', async function (assert) {
    await render(<template>{{camelize "harry-potter"}}</template>);

    const expected = 'harryPotter';

    assert.dom().hasText(expected, 'converts dashes to camelCase');
  });

  test('It converts spaces to camelCase', async function (assert) {
    await render(
      <template>
        {{camelize "age is foolish and forgetful when it underestimates youth"}}
      </template>,
    );

    const expected = 'ageIsFoolishAndForgetfulWhenItUnderestimatesYouth';

    assert.dom().hasText(expected, 'correctly camelizes input with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{camelize ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{camelize undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const wizard = htmlSafe('harry-potter');

    await render(<template>{{camelize wizard}}</template>);

    const expected = 'harryPotter';

    assert.dom().hasText(expected, 'correctly camelizes a SafeString');
  });
});
