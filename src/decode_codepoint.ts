import {decode as decodeMap} from "./maps/decode.ts";

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
export default function decodeCodePoint(codePoint: number) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }

    if (codePoint in JSON.parse(decodeMap)) {
        codePoint = (JSON.parse(decodeMap) as Record<string, number>)[codePoint];
    }

    let output = "";

    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    output += String.fromCharCode(codePoint);
    return output;
}
