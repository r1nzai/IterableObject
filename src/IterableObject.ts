class IterableObject<TObject extends object> {
	constructor(private object: TObject) {
	}
	get keys() {
		return Object.keys(this.object);
	}
	get values() {
		return Object.values(this.object);
	}
	get entries() {
		return Object.entries(this.object);
	}
	fromEntries<T extends Iterable<[string, any]>>(entries: T) {
		return this.constructor(Object.fromEntries(entries));
	}
	get length() {
		return this.keys.length;
	}
	get [Symbol.iterator]() {
		return this.entries[Symbol.iterator];
	}
	forEach(callback: (args: unknown) => void, thisArg?: any) {
		return this.entries.forEach(callback, thisArg);
	}
	map(callback: (value: [string, any], index: number, originalArray: Array<[string, any]>) => any, thisArg?: any) {
		return this.entries.map(callback, thisArg);
	}
	toMap() {
		return new Map(this.entries);
	}
}
export default IterableObject;
