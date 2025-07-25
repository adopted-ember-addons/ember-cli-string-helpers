import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { htmlSafe } from '@ember/template';

import truncate from '#src/helpers/truncate.ts';

module('Integration | Helper | {{truncate}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It truncates to 140 characters if no characterLimit is provided', async function (assert) {
    await render(
      <template>
        {{truncate
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem."
        }}
      </template>,
    );

    const expected =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit pur...';

    assert.dom().hasText(expected, 'truncates to 140 characters');
  });

  test('It truncates to characterLimit provided', async function (assert) {
    await render(
      <template>
        {{truncate
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem."
          20
        }}
      </template>,
    );

    const expected = 'Lorem ipsum dolor...';

    assert.dom().hasText(expected, 'truncates to characterLimit');
  });

  test('It does not truncate if string is not longer than characterLimit', async function (assert) {
    await render(
      <template>
        {{truncate
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id."
          140
        }}
      </template>,
    );

    const expected =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id.';

    assert.dom().hasText(expected, 'does not truncate');
  });

  test('It truncates to characterLimit provided without an ellipsis if useEllipsis is false', async function (assert) {
    await render(
      <template>
        {{truncate
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem."
          20
          false
        }}
      </template>,
    );

    const expected = 'Lorem ipsum dolor si';

    assert
      .dom()
      .hasText(expected, 'truncates to characterLimit without ellipsis');
  });

  test('It handles a SafeString', async function (assert) {
    const sentence = htmlSafe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit quam enim, in suscipit est rutrum id. Etiam vitae blandit purus, sed semper sem.',
    );

    await render(<template>{{truncate sentence 20}}</template>);

    const expected = 'Lorem ipsum dolor...';

    assert.dom().hasText(expected, 'correctly trims a SafeString');
  });
});
