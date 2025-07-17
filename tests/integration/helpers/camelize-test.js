import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{camelize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It maintains camelCase correctly', async function (assert) {
    await render(hbs`{{camelize "andAnother"}}`);

    let expected = 'andAnother';

    assert.dom('*').hasText(expected, 'maintains camelCase');
  });

  test('It converts underscores to camelCase', async function (assert) {
    await render(hbs`{{camelize "harry_potter"}}`);

    let expected = 'harryPotter';

    assert.dom('*').hasText(expected, 'converts underscores to camelCase');
  });

  test('It converts dashes to camelCase', async function (assert) {
    await render(hbs`{{camelize "harry-potter"}}`);

    let expected = 'harryPotter';

    assert.dom('*').hasText(expected, 'converts dashes to camelCase');
  });

  test('It converts spaces to camelCase', async function (assert) {
    await render(
      hbs`{{camelize "age is foolish and forgetful when it underestimates youth"}}`
    );

    let expected = 'ageIsFoolishAndForgetfulWhenItUnderestimatesYouth';

    assert.dom('*').hasText(expected, 'correctly camelizes input with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{camelize ""}}`);

    let expected = '';

    assert
      .dom('*')
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{camelize undefined}}`);

    let expected = '';

    assert
      .dom('*')
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('wizard', htmlSafe('harry-potter'));

    await render(hbs`{{camelize this.wizard}}`);

    let expected = 'harryPotter';

    assert.dom('*').hasText(expected, 'correctly camelizes a SafeString');
  });
});
