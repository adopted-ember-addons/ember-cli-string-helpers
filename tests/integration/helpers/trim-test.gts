import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import trim from 'ember-cli-string-helpers/helpers/trim';

module('Integration | Helper | {{trim}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It trim correctly', async function (assert) {
    await render(<template>{{trim " aa  "}}</template>);

    const expected = 'aa';

    assert.dom().hasText(expected, 'trim string as expected');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(<template>{{trim ""}}</template>);

    const expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(<template>{{trim undefined}}</template>);

    const expected = '';

    assert.dom().hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    const breakup = htmlSafe('  i need some space  ');

    await render(<template>{{trim breakup}}</template>);

    const expected = 'i need some space';

    assert.dom().hasText(expected, 'correctly trims a SafeString');
  });
});
