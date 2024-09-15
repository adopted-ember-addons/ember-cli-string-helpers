import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import lowercase from 'ember-cli-string-helpers/helpers/lowercase';

module('Integration | Helper | {{lowercase}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts all uppercase to lowercase', async function (assert) {
    await render(<template>{{lowercase "ALL UPPERCASE"}}</template>);

    const expected = 'all uppercase';

    assert.dom().hasText(expected, 'converts all uppercase to lowercase');
  });

  test('It converts mixed case to lowercase', async function (assert) {
    await render(<template>{{lowercase "UPPER and lower CaSe"}}</template>);

    const expected = 'upper and lower case';

    assert
      .dom()
      .hasText(expected, 'converts upper and lower case to lowercase');
  });

  test('It leaves special characters unmodified', async function (assert) {
    await render(<template>{{lowercase "SPECIAL @&/*-+^`"}}</template>);

    const expected = 'special @&/*-+^`';

    assert.dom().hasText(expected, 'converts special characters');
  });

  test('It converts accented characters to lowercase', async function (assert) {
    await render(<template>{{lowercase "ÂÊÎÔÛÄËÏÖÜÉÀÈ"}}</template>);

    const expected = 'âêîôûäëïöüéàè';

    assert.dom().hasText(expected, 'converts accented characters to lowercase');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{lowercase ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{lowercase undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const scream = htmlSafe('NOOOOOOOO');

    await render(<template>{{lowercase scream}}</template>);

    const expected = 'noooooooo';

    assert
      .dom()
      .hasText(expected, 'converts all uppercase SafeString to lowercase');
  });
});
