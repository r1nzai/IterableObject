class IterableObject {
	constructor(private obj: Object) {
		this.obj = obj;
	}
	get keys() {
		return Object.keys(this.obj);
	}
	get values() {
		return Object.values(this.obj);
	}
	get entries() {
		return Object.entries(this.obj);
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
