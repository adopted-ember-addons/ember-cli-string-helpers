import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | {{html-safe}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It html-safes the html string', async function (assert) {
    await render(hbs`{{html-safe '<h1>Hello World</h1>'}}`);

    assert
      .dom('h1')
      .hasText('Hello World', 'html string is correctly rendered');
  });

  test('It safely renders CSS classes from a property', async function (assert) {
    this.set('classes', 'error has-error');
    await render(hbs`<h1 class={{html-safe this.classes}}>Hello World</h1>`);

    assert.dom('h1').hasText('Hello World', 'it renders');
    assert.deepEqual(
      find('h1').getAttribute('class').split(' ').sort(),
      ['error', 'has-error'].sort(),
      'it has the correct CSS classes'
    );
  });
});
