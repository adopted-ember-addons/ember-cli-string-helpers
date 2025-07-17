import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('Integration | Helper | {{truncate}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It truncates to 140 characters if no characterLimit is provided', async function (assert) {
    await render(
      hbs`{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem."}}`,
    );

    let expected =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit pur...';

    assert.dom().hasText(expected, 'truncates to 140 characters');
  });

  test('It truncates to characterLimit provided', async function (assert) {
    await render(
      hbs`{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem." 20}}`,
    );

    let expected = 'Lorem ipsum dolor...';

    assert.dom().hasText(expected, 'truncates to characterLimit');
  });

  test('It does not truncate if string is not longer than characterLimit', async function (assert) {
    await render(
      hbs`{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id." 140}}`,
    );

    let expected =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id.';

    assert.dom().hasText(expected, 'does not truncate');
  });

  test('It truncates to characterLimit provided without an ellipsis if useEllipsis is false', async function (assert) {
    await render(
      hbs`{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem." 20 false}}`,
    );

    let expected = 'Lorem ipsum dolor si';

    assert
      .dom()
      .hasText(expected, 'truncates to characterLimit without ellipsis');
  });

  test('It handles a SafeString', async function (assert) {
    this.set(
      'sentence',
      htmlSafe(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem.',
      ),
    );

    await render(hbs`{{truncate this.sentence 20}}`);

    let expected = 'Lorem ipsum dolor...';

    assert.dom().hasText(expected, 'correctly trims a SafeString');
  });
});
