import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{underscore}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(hbs`{{underscore "andAnother"}}`);

    let expected = 'and_another';

    assert.dom('*').hasText(expected, 'converts camelCase to underscored');
  });

  test('It converts dashes to underscores', async function (assert) {
    await render(hbs`{{underscore "harry-potter"}}`);

    let expected = 'harry_potter';

    assert.dom('*').hasText(expected, 'converts dashes to underscores');
  });

  test('It converts spaces to underscores', async function (assert) {
    await render(
      hbs`{{underscore "age is foolish and forgetful when it underestimates youth"}}`
    );

    let expected = 'age_is_foolish_and_forgetful_when_it_underestimates_youth';

    assert.dom('*').hasText(expected, 'converts spaces to underscores');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{underscore ""}}`);

    let expected = '';

    assert
      .dom('*')
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{underscore undefined}}`);

    let expected = '';

    assert
      .dom('*')
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('wizard', htmlSafe('harry-potter'));

    await render(hbs`{{underscore this.wizard}}`);

    let expected = 'harry_potter';

    assert.dom('*').hasText(expected, 'correctly underscores a SafeString');
  });
});
