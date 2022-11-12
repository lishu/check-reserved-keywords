# check-reserved-keywords

    Check commonly used languages reserved keywords

## install

```
npm install check-reserved-keywords --save
```

## use

```js
import { isReservedKeywords, checkReservedKeywords } from 'check-reserved-keywords';

// Test word for langauge
const result = isReservedKeywords('const', ['ES6']);
if (result) {
    console.log(`'const' is ES6 reserved keywords`);
} else {
    console.log(`'const' is not ES6 reserved keywords`);
}

// known word in all include languages
const langauges = checkReservedKeywords('select', undefined, true);
console.debug(`select is reserved keyword in ${langauges.join(', ')}`);

```

## Includes Language

* `T-SQL`: SQL SERVER Reserved Keywords
* `MySQL`: MySQL Reserved Keywords
* `Oracle`: ORACLE SQL Reserved Keywords
* `ODBC`: ODBC Reserved Keywords
* `ES5`: JavaScript ES5 Reserved Keywords
* `ES6`: JavaScript ES6 Reserved Keywords
* `Java`: Java Reserved Keywords
* `CSharp`: C# Reserved Keywords
* `Python`: Python Reserved Keywords
* `Go`: Go Reserved Keywords
* `Rust`: Rust Reserved Keywords
