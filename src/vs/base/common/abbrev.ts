import { LRUCache } from 'vs/base/common/map';

export function buildAbbrevPattern(query: string): string {
	const goodChars = query.replace(/\W/g, '');
	const midPattern = goodChars.split('')
		.map((ch) => {
			if (ch.match(/[a-zA-Z]/)) {
				const lower = ch.toLowerCase();
				const upper = ch.toUpperCase();
				const anyCase = `(?:.*[^a-zA-Z])?[${lower}${upper}]`;
				const camelCase = `(?:.*[^A-Z])?${upper}`;
				return `(?:${anyCase}|${camelCase})`;
			} else if (ch.match(/\d+/)) {
				return `(?:.*[^0-9])?${ch}`;
			} else {
				return `.*${ch}`;
			}
		})
		.join('');
	return '^' + midPattern;
}

const fuzzyRegExpCache = new LRUCache<string, RegExp>(10000); // bounded to 10000 elements
export function abbrevMatch(pattern: string, text: string): RegExpExecArray|null {

	// Form RegExp for wildcard matches
	let regexp = fuzzyRegExpCache.get(pattern);
	if (!regexp) {
		// regexp = new RegExp(strings.convertSimple2RegExpPattern(word), 'i');
		regexp = new RegExp(buildAbbrevPattern(pattern));
		fuzzyRegExpCache.set(pattern, regexp);
	}

	// RegExp Filter
	const match = regexp.exec(text);
	return match;
}

export function abbrevContains(target: string, query: string)
{
  return abbrevMatch(query, target) !== null;
}
