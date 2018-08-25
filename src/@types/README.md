# Custom Typescript Declaration files

Create in this directory your custom type definitions. For example, declaration files for untyped npm modules.

First, create some `.d.ts` file like `./my-npm-js-module.d.ts` or using a directory with the module name `./my-npm-js-module/index.d.ts`

Then create your declaration module

```ts
declare module 'my-npm-js-module' {
  // all your stuff here like interfaces, classes, external imports, etc...
}
```

For more info about see [Typescript Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) docs.
