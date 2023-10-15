# arrive-type

A generic version of `@types/arrive`.

## Installation

```shell
npm install arrive
npm install @dragonish/arrive-type -D
```

## Configuration

Add to the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@dragonish/arrive-type"
    ]
  }
}
```

## Usage

```typescript
document.arrive<HTMLImageElement>('img', img => {
  const src = img.src;
  // ...
});
```

## Credits

- [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [uzairfarooq/arrive](https://github.com/uzairfarooq/arrive)

## License

[MIT](./LICENSE)
