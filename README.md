# entities
🦕 Encode & decode XML and HTML entities with ease.
https://denobr.com
## How to use `entities`

```javascript
const entities = require("https://raw.githubusercontent.com/DenoBRComunitty/entities/master/mod.ts");

//encoding
entities.escape("&#38;"); // "&#x26;#38;"
entities.encodeXML("&#38;"); // "&amp;#38;"
entities.encodeHTML("&#38;"); // "&amp;&num;38&semi;"

//decoding
entities.decodeXML("asdf &amp; &#xFF; &#xFC; &apos;"); // "asdf & ÿ ü '"
entities.decodeHTML("asdf &amp; &yuml; &uuml; &apos;"); // "asdf & ÿ ü '"
```
