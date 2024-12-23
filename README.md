# Incorrect Usage of $inc Operator in MongoDB Update
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical value in a document.  However, in the provided code, a string value is being used, which results in an error. The solution demonstrates the correct way to use the `$inc` operator with a numerical value.

## Bug
The provided code attempts to increment the `counter` field by the string value "1". This is invalid and will cause an error.

## Solution
The solution shows the correct usage, incrementing the `counter` with the numerical value 1.