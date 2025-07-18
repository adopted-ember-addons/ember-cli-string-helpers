# ember-cli-string-helpers

![Download count all time](https://img.shields.io/npm/dt/ember-cli-string-helpers.svg)
[![CI](https://github.com/adopted-ember-addons/ember-cli-string-helpers/actions/workflows/ci.yml/badge.svg)](https://github.com/adopted-ember-addons/ember-cli-string-helpers/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/ember-cli-string-helpers.svg)](https://badge.fury.io/js/ember-cli-string-helpers)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-string-helpers.svg)](http://emberobserver.com/addons/ember-cli-string-helpers)

String helpers for Ember. Extracted from the great [DockYard's ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers/).

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
  - [See also](#see-also)
  - [License](#license)

## Usage

#### `camelize`

Camelizes a string using `Ember.String.camelize`.

```hbs
{{camelize "hello jim bob"}}
{{camelize stringWithDashes}}
```

Output: `helloJimBob`

**[⬆️ back to top](#available-helpers)**

#### `capitalize`

Capitalizes a string using `Ember.String.capitalize`.

```hbs
{{capitalize "hello jim bob"}}
{{capitalize fullName}}
```

Output: `Hello jim bob`

**[⬆️ back to top](#available-helpers)**

#### `classify`

Classifies a string using `Ember.String.classify`.

```hbs
{{classify "hello jim bob"}}
{{classify stringWithDashes}}
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

**[⬆️ back to top](#available-helpers)**

#### `humanize`

Removes dashes and underscores from a string, capitalizes the first letter and makes the rest of the string lower case.

```hbs
{{humanize "some-string"}}
{{humanize phrase}}
```

Output: `Some string`

**[⬆️ back to top](#available-helpers)**

#### `lowercase`

Lowercases a string.

```hbs
{{lowercase "People Person's Paper People"}}
{{lowercase phrase}}
```

Output: `people person's paper people`

**[⬆️ back to top](#available-helpers)**

#### `titleize`

Capitalizes every word separated by a white space or a dash.

```hbs
{{titleize "my big fat greek wedding"}}
{{titleize phrase}}
```

Output: `My Big Fat Greek Wedding`

**[⬆️ back to top](#available-helpers)**

#### `trim`

Trim a string.

```hbs
{{trim "  Lorem ipsum dolor sit amet, consectetur adipiscing elit.   "}}
{{trim phrase}}
```

Output: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

#### `truncate`

Truncates a string with a characterLimit and optionally adds an ellipsis to the end.

```hbs
{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 20 true}}
{{truncate phrase characterLimit useEllipsis}}
```

Output: `Lorem ipsum dolor...`

**[⬆️ back to top](#available-helpers)**

#### `underscore`

Underscores a string using `Ember.String.underscore`.

```hbs
{{underscore "whatsThat"}}
{{underscore phrase}}
```

Output: `whats_that`

**[⬆️ back to top](#available-helpers)**

#### `uppercase`

Uppercases a string.

```hbs
{{uppercase "loud noises"}}
{{uppercase phrase}}
```

Output: `LOUD NOISES`

**[⬆️ back to top](#available-helpers)**

#### `w`

Splits a string on whitespace and/or turns multiple words into an array.

```hbs
{{#each (w "First" "Second" "Last") as |rank|}}
  Our {{rank}} place winner is ...
{{/each}}
```

or:

```hbs
{{#each (w "First Second Last") as |rank|}}
  Our {{rank}} place winner is ...
{{/each}}
```

See also: [Ember `w` documentation](https://api.emberjs.com/ember/release/classes/String/methods/w?anchor=w)

**[⬆️ back to top](#available-helpers)**

## See also

* [ember-composable-helpers](https://github.com/dockyard/ember-composable-helpers)
* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)

## License

This project is licensed under the [MIT License](LICENSE.md).
