import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{uppercase}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts all lowercase to uppercase', async function (assert) {
    await render(hbs`{{uppercase "all lowercase"}}`);

    let expected = 'ALL LOWERCASE';

    assert.dom().hasText(expected, 'converts all lowercase to uppercase');
  });

  test('It converts mixed case to uppercase', async function (assert) {
    await render(hbs`{{uppercase "UPPER and lower CaSe"}}`);

    let expected = 'UPPER AND LOWER CASE';

    assert
      .dom()
      .hasText(expected, 'converts upper and lower case to uppercase');
  });

  test('It leaves special characters untouched', async function (assert) {
    await render(hbs`{{uppercase "special @&\/*-+^\`"}}`);

    let expected = 'SPECIAL @&/*-+^`';

    assert.dom().hasText(expected, 'ignores special characters');
  });

  test('It converts accented characters to uppercase', async function (assert) {
    await render(hbs`{{uppercase "âêîôûäëïöüéàè"}}`);

    let expected = 'ÂÊÎÔÛÄËÏÖÜÉÀÈ';

    assert
      .dom()
      .hasText(expected, 'converts accented characters to uppercase');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{uppercase ""}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{uppercase undefined}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('screamplease', htmlSafe('noooooooo'));

    await render(hbs`{{uppercase this.screamplease}}`);

    let expected = 'NOOOOOOOO';

    assert
      .dom()
      .hasText(expected, 'converts all lowercase SafeString to uppercase');
  });
});
