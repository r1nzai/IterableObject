Probably a dumb idea i had, but it works so far.

example
```js
const obj = {a:1,b:2};
const iterableObject = new IterableObject(obj);
iterableObject.forEach((key, value) => {
    console.log(key, value);
});
```