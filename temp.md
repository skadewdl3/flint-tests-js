**Fix incorrect test case output.**
The add test case expected wrong output, change expected value to 17.


```js
expect(add(8, 9)).toBe(17);
```


**Fix logical error in factorial.**
n <= 1 condition was wrong, factorial(0) should return 1. Correct condition is n === 0.


```js
if (n === 0) return 1;
```

