# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error where an array is passed to a function expecting a single string. The error message can sometimes be confusing, so this example aims to clarify the issue and its solution.

## Bug
The `greeter` function expects a string argument but receives an array. TypeScript correctly identifies this type mismatch but may not always provide the most helpful error message.

## Solution
The solution involves either modifying the `greeter` function to accept an array or modifying the call to `greeter` to pass a single string from the array.