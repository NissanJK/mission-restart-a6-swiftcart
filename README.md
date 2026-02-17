#### 1) What is the difference between `null` and `undefined`?
## Answer: The difference between null and undefined is null means intentional empty value whereas undefined means the variable which was declared but not assigned. Also in case of null it is usually used by developers whereas undefined is used in javascript by default.

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
## Answer: Even though both are used to loop through arrays map() and forEach() differ in their purpose. map() creates new array, transforms elements and returns value whereas forEach() doesn't return anything and is only used for side effects.

#### 3) What is the difference between `==` and `===`?
## Answer: == only compares the value whereas === compares both value and its type.

#### 4) What is the significance of `async`/`await` in fetching API data?
## Answer: async/await is usually used to handle asynchronous operation in a synchronous looking way. The benefit's are that its easier to handle errors & it avoids callback chaining.

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
## Answer: Scope basically determines where the variable is accessible.For example in case of var/let/const in a global scope it can be accessed from anywhere, in case of a function it can only be accessed inside the said function, in case of block scope let/const can be accessed inside the said block but var is not block scoped meaning it will be accessible even from outside the block.