# ember-cli-string-helpers

![Download count all time](https://img.shields.io/npm/dt/ember-cli-string-helpers.svg)
[![CI](https://github.com/adopted-ember-addons/ember-cli-string-helpers/actions/workflows/ci.yml/badge.svg)](https://github.com/adopted-ember-addons/ember-cli-string-helpers/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/ember-cli-string-helpers.svg)](https://badge.fury.io/js/ember-cli-string-helpers)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-string-helpers.svg)](http://emberobserver.com/addons/ember-cli-string-helpers)

String helpers for Ember. Extracted from the great [DockYard's ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers/).

> [!WARNING]  
> If you are using single file components you most likely do not need this addon as it's just a wrapper on `@ember/string` methods. You can import most methods directly from `@ember/string` in your components, or migrate to something like [change-case](https://www.npmjs.com/package/change-case).

## Compatibility

* Ember.js v3.28 or above
* Ember CLI v4.4 or above
* Node.js v20 or above

## Installation

```shell
ember install ember-cli-string-helpers
```

## Available helpers

- [ember-cli-string-helpers](#ember-cli-string-helpers)
  - [Compatibility](#compatibility)
  - [Installation](#installation)
  - [Available helpers](#available-helpers)
  - [Usage](#usage)
      - [`camelize`](#camelize)
      - [`capitalize`](#capitalize)
      - [`classify`](#classify)
      - [`dasherize`](#dasherize)
      - [`html-safe`](#html-safe)
      - [`humanize`](#humanize)
      - [`lowercase`](#lowercase)
      - [`titleize`](#titleize)
      - [`trim`](#trim)
      - [`truncate`](#truncate)
      - [`underscore`](#underscore)
      - [`uppercase`](#uppercase)
      - [`w`](#w)
  - [Glint usage](#glint-usage)
  - [Template Tag usage](#template-tag-usage)
  - [See also](#see-also)
  - [License](#license)

## Usage

#### `camelize`

Camelizes a string using `Ember.String.camelize`.

```gjs
import { camelize } from 'ember-cli-string-helpers';

<template>
  {{camelize "hello jim bob"}}
  {{camelize stringWithDashes}}
</template>
```

Output: `helloJimBob`

**[⬆️ back to top](#available-helpers)**

#### `capitalize`

Capitalizes a string using `Ember.String.capitalize`.

```gjs
import { capitalize } from 'ember-cli-string-helpers';

<template>
  {{capitalize "hello jim bob"}}
  {{capitalize fullName}}
</template>
```

Output: `Hello jim bob`

**[⬆️ back to top](#available-helpers)**

#### `classify`

Classifies a string using `Ember.String.classify`.

```gjs
import { classify } from 'ember-cli-string-helpers';

<template>
  {{classify "hello jim bob"}}
  {{classify stringWithDashes}}
</template>
```

Output: `HelloJimBob`

**[⬆️ back to top](#available-helpers)**

#### `dasherize`

Dasherizes a string using `Ember.String.dasherize`.

```hbs
{{dasherize "whatsThat"}}
{{dasherize phrase}}
```

Output: `whats-that`

**[⬆️ back to top](#available-helpers)**

#### `html-safe`

Mark a string as safe for unescaped output with Ember templates using `Ember.String.htmlSafe`.

```hbs
{{html-safe "<div>someString</div>"}}
{{html-safe unsafeString}}
```

```gjs
import { htmlSafe } from 'ember-cli-string-helpers';

<template>
  {{htmlSafe "<div>someString</div>"}}
  {{htmlSafe unsafeString}}
</template>
```

**[⬆️ back to top](#available-helpers)**

#### `humanize`

Removes dashes and underscores from a string, capitalizes the first letter and makes the rest of the string lower case.

```gjs
import { humanize } from 'ember-cli-string-helpers';

<template>
  {{humanize "some-string"}}
  {{humanize phrase}}
</template>
```

Output: `Some string`

**[⬆️ back to top](#available-helpers)**

#### `lowercase`

Lowercases a string.

```gjs
import { lowercase } from 'ember-cli-string-helpers';

<template>
  {{lowercase "People Person's Paper People"}}
  {{lowercase phrase}}
</template>
```

Output: `people person's paper people`

**[⬆️ back to top](#available-helpers)**

#### `titleize`

Capitalizes every word separated by a white space or a dash.

```gjs
import { titleize } from 'ember-cli-string-helpers';

<template>
  {{titleize "my big fat greek wedding"}}
  {{titleize phrase}}
</template>
```

Output: `My Big Fat Greek Wedding`

**[⬆️ back to top](#available-helpers)**

#### `trim`

Trim a string.

```gjs
import { trim } from 'ember-cli-string-helpers';

<template>
  {{trim "  Lorem ipsum dolor sit amet, consectetur adipiscing elit.   "}}
  {{trim phrase}}
</template>
```

Output: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

#### `truncate`

Truncates a string with a characterLimit and optionally adds an ellipsis to the end.

```gjs
import { truncate } from 'ember-cli-string-helpers';

<template>
  {{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 20 true}}
  {{truncate phrase characterLimit useEllipsis}}
</template>
```

Output: `Lorem ipsum dolor...`

**[⬆️ back to top](#available-helpers)**

#### `underscore`

Underscores a string using `Ember.String.underscore`.

```gjs
import { underscore } from 'ember-cli-string-helpers';

<template>
  {{underscore "whatsThat"}}
  {{underscore phrase}}
</template>
```

Output: `whats_that`

**[⬆️ back to top](#available-helpers)**

#### `uppercase`

Uppercases a string.

```gjs
import { uppercase } from 'ember-cli-string-helpers';

<template>
  {{uppercase "loud noises"}}
  {{uppercase phrase}}
</template>
```

Output: `LOUD NOISES`

**[⬆️ back to top](#available-helpers)**

#### `w`

Splits a string on whitespace and/or turns multiple words into an array.

```gjs
import { w } from 'ember-cli-string-helpers';

<template>
  {{#each (w "First" "Second" "Last") as |rank|}}
    Our {{rank}} place winner is ...
  {{/each}}
</template>
```

or:

```gjs
import { w } from 'ember-cli-string-helpers';

<template>
  {{#each (w "First Second Last") as |rank|}}
    Our {{rank}} place winner is ...
  {{/each}}
</template>
```

See also: [Ember `w` documentation](https://api.emberjs.com/ember/4.9/classes/String/methods/w?anchor=w)

**[⬆️ back to top](#available-helpers)**

## Glint usage

If you are using [Glint](https://typed-ember.gitbook.io/glint/) and `environment-ember-loose`, you can add all the helpers to your app at once by adding

```ts
import type EmberCliStringHelpersRegistry from 'ember-cli-string-helpers/template-registry';
```

to your app's e.g. `types/glint.d.ts` file, and making sure your registry extends from EmberCliStringHelpersRegistry:

```ts
declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberCliStringHelpersRegistry {
      // ...
    }
}
```

## Template Tag usage

```gjs
import { camelize } from 'ember-cli-string-helpers';

<template>
  {{camelize "hello jim bob"}}
</template>
```

## See also

* [ember-composable-helpers](https://github.com/NullVoxPopuli/ember-composable-helpers)
* [ember-math-helpers](https://github.com/RobbieTheWagner/ember-math-helpers)
* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)

## License

This project is licensed under the [MIT License](LICENSE.md).
