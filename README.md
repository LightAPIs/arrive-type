# arrive-type

generic type library of `arrive` package.

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
      "./node_modules/@dragonish"
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

Async/await and promise support:

```typescript
const img = await document.arrive<HTMLImageElement>('img');
const src = img.src;
// ...
```

## Credits

- [uzairfarooq/arrive](https://github.com/uzairfarooq/arrive)
- [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

## License

[MIT](./LICENSE)
