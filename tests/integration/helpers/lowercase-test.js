import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{lowercase}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts all uppercase to lowercase', async function (assert) {
    await render(hbs`{{lowercase "ALL UPPERCASE"}}`);

    let expected = 'all uppercase';

    assert.dom().hasText(expected, 'converts all uppercase to lowercase');
  });

  test('It converts mixed case to lowercase', async function (assert) {
    await render(hbs`{{lowercase "UPPER and lower CaSe"}}`);

    let expected = 'upper and lower case';

    assert
      .dom()
      .hasText(expected, 'converts upper and lower case to lowercase');
  });

  test('It leaves special characters unmodified', async function (assert) {
    await render(hbs`{{lowercase "SPECIAL @&\/*-+^\`"}}`);

    let expected = 'special @&/*-+^`';

    assert.dom().hasText(expected, 'converts special characters');
  });

  test('It converts accented characters to lowercase', async function (assert) {
    await render(hbs`{{lowercase "ÂÊÎÔÛÄËÏÖÜÉÀÈ"}}`);

    let expected = 'âêîôûäëïöüéàè';

    assert.dom().hasText(expected, 'converts accented characters to lowercase');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{lowercase ""}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{lowercase undefined}}`);

    let expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('scream', htmlSafe('NOOOOOOOO'));

    await render(hbs`{{lowercase this.scream}}`);

    let expected = 'noooooooo';

    assert
      .dom()
      .hasText(expected, 'converts all uppercase SafeString to lowercase');
  });
});
