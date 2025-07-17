import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{trim}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It trim correctly', async function (assert) {
    await render(hbs`{{trim " aa  "}}`);

    let expected = 'aa';

    assert.dom().hasText(expected, 'trim string as expected');
  });

  test('It correctly handles empty string input', async function (assert) {
    await render(hbs`{{trim ""}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if input is empty string');
  });

  test('It correctly handles undefined input', async function (assert) {
    await render(hbs`{{trim undefined}}`);

    let expected = '';

    assert
      .dom()
      .hasText(expected, 'renders empty string if undefined input');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('breakup', htmlSafe('  i need some space  '));

    await render(hbs`{{trim this.breakup}}`);

    let expected = 'i need some space';

    assert.dom().hasText(expected, 'correctly trims a SafeString');
  });
});
