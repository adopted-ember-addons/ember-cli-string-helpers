import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | {{w}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It splits the string on whitespace', async function (assert) {
    this.set('string', 'foo bar\nbaz');

    await render(hbs`{{#each (w this.string) as |word|}}{{word}}{{/each}}`);

    assert.dom('*').hasText('foobarbaz', 'the words are split');
  });

  test('It makes an array of many words', async function (assert) {
    await render(
      hbs`{{#each (w "foo" "bar" "baz") as |word|}}{{word}}{{/each}}`
    );
    assert.dom('*').hasText('foobarbaz', 'the words are turned into an array');
  });

  test('You can even break up multiple strings of words', async function (assert) {
    await render(hbs`{{#each (w "foo bar" "baz") as |word|}}{{word}}{{/each}}`);
    assert.dom('*').hasText('foobarbaz', 'the words are turned into an array');
  });

  test('It gracefully handles empty arguments', async function (assert) {
    await render(hbs`{{#each (w) as |word|}}{{word}}{{/each}}`);

    assert.dom('*').hasText('', 'is blank');
  });
});
