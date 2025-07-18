import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import uppercase from '#src/helpers/uppercase.ts';

module('Integration | Helper | {{uppercase}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It converts all lowercase to uppercase', async function (assert) {
    await render(<template>{{uppercase "all lowercase"}}</template>);

    const expected = 'ALL LOWERCASE';

    assert.dom().hasText(expected, 'converts all lowercase to uppercase');
  });

  test('It converts mixed case to uppercase', async function (assert) {
    await render(<template>{{uppercase "UPPER and lower CaSe"}}</template>);

    const expected = 'UPPER AND LOWER CASE';

    assert
      .dom()
      .hasText(expected, 'converts upper and lower case to uppercase');
  });

  test('It leaves special characters untouched', async function (assert) {
    await render(<template>{{uppercase "special @&/*-+^`"}}</template>);

    const expected = 'SPECIAL @&/*-+^`';

    assert.dom().hasText(expected, 'ignores special characters');
  });

  test('It converts accented characters to uppercase', async function (assert) {
    await render(<template>{{uppercase "âêîôûäëïöüéàè"}}</template>);

    const expected = 'ÂÊÎÔÛÄËÏÖÜÉÀÈ';

    assert.dom().hasText(expected, 'converts accented characters to uppercase');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{uppercase ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{uppercase undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const screamplease = htmlSafe('noooooooo');

    await render(<template>{{uppercase screamplease}}</template>);

    const expected = 'NOOOOOOOO';

    assert
      .dom()
      .hasText(expected, 'converts all lowercase SafeString to uppercase');
  });
});
