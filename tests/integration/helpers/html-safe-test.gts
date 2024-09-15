import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';

import htmlSafe from 'ember-cli-string-helpers/helpers/html-safe';

module('Integration | Helper | {{html-safe}}', function (hooks) {
  setupRenderingTest(hooks);

  test('It html-safes the html string', async function (assert) {
    await render(
      <template>
        {{htmlSafe "<h1>Hello World</h1>"}}
      </template>,
    );

    assert
      .dom('h1')
      .hasText('Hello World', 'html string is correctly rendered');
  });

  test('It safely renders CSS classes from a property', async function (assert) {
    const classes = 'error has-error';

    await render(
      <template>
        <h1 class={{htmlSafe classes}}>Hello World</h1>
      </template>,
    );

    assert.dom('h1').hasText('Hello World', 'it renders');
    assert.deepEqual(
      find('h1')?.getAttribute('class')?.split(' ').sort(),
      ['error', 'has-error'].sort(),
      'it has the correct CSS classes',
    );
  });
});
