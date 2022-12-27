declare class IterableObject {
	constructor(obj: Object);
	get keys(): string[];
	get values(): any[];
	get entries(): [string, any][];
	get length(): number;
	get [Symbol.iterator](): () => Iterator<[string, any]>;
	forEach(callback: (args: unknown) => void, thisArg?: any): void;
	map(callback: (value: [string, any], index: number, originalArray: [string, any][]) => any, thisArg?: any): any[];
	toMap(): Map<string, any>;
}
