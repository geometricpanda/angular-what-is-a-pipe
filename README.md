# Angular - What is a Pipe?

Angular Pipes are functions which run within the `Template` and allow us to transform data.

They are used to format data for display, and are commonly used to format dates, currency, and strings.

There are two types of pipes:

- Pure Pipes
- Impure Pipes

## Pure Pipes

Pure pipes are the default type of pipe. They are called pure because the Angular framework will call the
pipe's `transform()` method only when it detects a pure change to the input value.

A pure change is either a change to a primitive input value (String, Number, Boolean, Symbol) or a changed.

## Impure Pipes

Impure pipes are called impure because the Angular framework will call the pipe's `transform()` method
every time it runs the `detectChanges()` cycle, regardless of whether the value or parameters have changed.

## Reference:

- https://angular.io/guide/pipes
