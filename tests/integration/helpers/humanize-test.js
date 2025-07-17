import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{humanize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts underscores to spaces and capitalizes the first word', async function (assert) {
    await render(hbs`{{humanize "item_color"}}`);

    let expected = 'Item color';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It converts dashes to spaces and capitalizes the first word', async function (assert) {
    await render(hbs`{{humanize "item-color-options"}}`);

    let expected = 'Item color options';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles single string input', async function (assert) {
    await render(hbs`{{humanize "a"}}`);

    let expected = 'A';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{humanize ""}}`);

    let expected = '';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{humanize undefined}}`);

    let expected = '';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles capitalised input with spaces', async function (assert) {
    await render(hbs`{{humanize "CHOOSE AN ITEM COLOR"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles capitalised input with underscores', async function (assert) {
    await render(hbs`{{humanize "CHOOSE_AN_ITEM_COLOR"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles capitalised input with dashes', async function (assert) {
    await render(hbs`{{humanize "CHOOSE-AN-ITEM-COLOR"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with spaces', async function (assert) {
    await render(hbs`{{humanize "cHoOsE aN iTeM cOlOr"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with underscores', async function (assert) {
    await render(hbs`{{humanize "cHoOsE_aN_iTeM_cOlOr"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with dashes', async function (assert) {
    await render(hbs`{{humanize "cHoOsE-aN-iTeM-cOlOr"}}`);

    let expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('sentence', htmlSafe('cHoOsE aN iTeM cOlOr'));

    await render(hbs`{{humanize this.sentence}}`);

    let expected = 'Choose an item color';

    assert
      .dom()
      .hasText(expected, 'converts SafeString capitals to humanized');
  });
});
