import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import humanize from 'ember-cli-string-helpers/helpers/humanize';

module('Integration | Helper | {{humanize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts underscores to spaces and capitalizes the first word', async function (assert) {
    await render(<template>{{humanize "item_color"}}</template>);

    const expected = 'Item color';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It converts dashes to spaces and capitalizes the first word', async function (assert) {
    await render(<template>{{humanize "item-color-options"}}</template>);

    const expected = 'Item color options';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles single string input', async function (assert) {
    await render(<template>{{humanize "a"}}</template>);

    const expected = 'A';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{humanize ""}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{humanize undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'converts underscored to humanized');
  });

  test('It correctly handles capitalised input with spaces', async function (assert) {
    await render(<template>{{humanize "CHOOSE AN ITEM COLOR"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles capitalised input with underscores', async function (assert) {
    await render(<template>{{humanize "CHOOSE_AN_ITEM_COLOR"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles capitalised input with dashes', async function (assert) {
    await render(<template>{{humanize "CHOOSE-AN-ITEM-COLOR"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with spaces', async function (assert) {
    await render(<template>{{humanize "cHoOsE aN iTeM cOlOr"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with underscores', async function (assert) {
    await render(<template>{{humanize "cHoOsE_aN_iTeM_cOlOr"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It correctly handles mixed-case input with dashes', async function (assert) {
    await render(<template>{{humanize "cHoOsE-aN-iTeM-cOlOr"}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts capitals to humanized');
  });

  test('It handles a SafeString', async function (assert) {
    const sentence = htmlSafe('cHoOsE aN iTeM cOlOr');

    await render(<template>{{humanize sentence}}</template>);

    const expected = 'Choose an item color';

    assert.dom().hasText(expected, 'converts SafeString capitals to humanized');
  });
});
