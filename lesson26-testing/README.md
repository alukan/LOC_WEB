# What is testing

Test help with:
- maintain
- prevent bugs

Types of testing:
- Unit test:
function return a+b
test: 
a = 3 
b = 2
output = 5
- Integration test:
We have 2 functions. 1 takes amount of admins from DB, 2 takes amount of usual users.
After, we want to count how many total users we have.
Counting total is just a+b.
Integration will be: count all users and compare with a+b.
- End-to-End: simulate user behavior. Sign up, create user acount, become admin, check if number of admins changed.

## Testing library
Initialize node:
`npm init -y`

Jest:
`npm install --save-dev jest`

To start it: 
`jest`

To use with TS:
```
npm install --save-dev jest ts-jest @types/jest typescript
```

Configure it:
`npx ts-jest config:init`

## Types of expect:

- `toBe()` - Strict equality
- `toEqual()` - Deep equality
- `toContain()` - Check if an array contains an element
- `toHaveLength()` - Check array length
- `toThrow()` - Test if a function throws an error