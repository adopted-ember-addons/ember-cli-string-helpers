import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{classify}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts camelCase correctly', async function (assert) {
    await render(hbs`{{classify "andAnother"}}`);

    let expected = 'AndAnother';

    assert.dom().hasText(expected, 'classifies camelCased strings');
  });

  test('It converts underscored strings correctly', async function (assert) {
    await render(hbs`{{classify "harry_potter"}}`);

    let expected = 'HarryPotter';

    assert.dom().hasText(expected, 'classifies underscored strings');
  });

  test('It converts spaces in strings correctly', async function (assert) {
    await render(
      hbs`{{classify "age is foolish and forgetful when it underestimates youth"}}`
    );

    let expected = 'AgeIsFoolishAndForgetfulWhenItUnderestimatesYouth';

    assert.dom().hasText(expected, 'classifies strings with spaces');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{classify ""}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{classify undefined}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('wizard', htmlSafe('harry_potter'));

    await render(hbs`{{classify this.wizard}}`);

    let expected = 'HarryPotter';

    assert.dom().hasText(expected, 'correctly classifies a SafeString');
  });
});
