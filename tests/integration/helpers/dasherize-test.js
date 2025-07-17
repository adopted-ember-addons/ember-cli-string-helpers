import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{dasherize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(hbs`{{dasherize "andAnother"}}`);

    let expected = 'and-another';

    assert.dom().hasText(expected, 'converts camelCase to dasherized');
  });

  test('It converts underscores to dashes', async function (assert) {
    await render(hbs`{{dasherize "harry_potter"}}`);

    let expected = 'harry-potter';

    assert.dom().hasText(expected, 'converts underscores to dashes');
  });

  test('It converts spaces to dashes', async function (assert) {
    await render(
      hbs`{{dasherize "age is foolish and forgetful when it underestimates youth"}}`
    );

    let expected = 'age-is-foolish-and-forgetful-when-it-underestimates-youth';

    assert.dom().hasText(expected, 'correctly dasherizes input with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{dasherize ""}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{dasherize undefined}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('wizard', htmlSafe('harry_potter'));

    await render(hbs`{{dasherize this.wizard}}`);

    let expected = 'harry-potter';

    assert.dom().hasText(expected, 'correctly dasherizes a SafeString');
  });
});
