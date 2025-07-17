import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{titleize}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It titleizes a string', async function (assert) {
    await render(hbs`
      {{titleize 'my big fat greek wedding'}}
    `);

    let expected = 'My Big Fat Greek Wedding';

    assert.dom('*').hasText(expected, 'titleized value');
  });

  test('It handles undefined', async function (assert) {
    await render(hbs`
      {{titleize this.nostring}}
    `);

    assert.dom('*').hasText('', 'No value');
  });

  test('It handles null', async function (assert) {
    this.set('value', null);
    await render(hbs`{{titleize this.value}}`);

    assert.dom('*').hasText('', 'No value');
  });

  test('It handles a SafeString', async function (assert) {
    this.set('title', htmlSafe('my big fat greek wedding'));

    await render(hbs`{{titleize this.title}}`);

    let expected = 'My Big Fat Greek Wedding';

    assert.dom('*').hasText(expected, 'correctly titleizes a SafeString');
  });
});
