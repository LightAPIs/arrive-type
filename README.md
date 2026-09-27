# arrive-type

generic type library of `arrive` package.

## Installation

```shell
npm install arrive
npm install @dragonish/arrive-type -D
```

## Configuration

This package ships **global type declarations** (it augments `Document`, `Window`, `Element`, `JQuery`, etc.), so TypeScript needs to load it. Choose **one** of the following methods.

### Option 1: Triple-slash reference (recommended)

Add this to a global declaration file in your project (e.g. `src/vite-env.d.ts` or `global.d.ts`):

```typescript
/// <reference types="@dragonish/arrive-type" />
```

- Leaves other compiler options untouched.
- Keeps automatic `@types/*` inclusion working.
- Resolves correctly in monorepo sub-packages.

### Option 2: `types` field

Add to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@dragonish/arrive-type"]
  }
}
```

> Note: once `types` is set, other `@types/*` packages are **no longer included automatically**; list them as well (e.g. `["@dragonish/arrive-type", "node", "vite/client"]`). If your project already defines `types`, **merge** rather than overwrite.

### Option 3: `typeRoots`

Add to `tsconfig.json`:

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

> This method has several limitations and is **not recommended** unless your project already uses `typeRoots`:
>
> - If `types` is also set, this method has **no effect** (TypeScript stops scanning `typeRoots`).
> - In sub-packages, monorepos, or hoisted dependencies, the relative `./node_modules` path may fail to resolve.
> - It registers **every** package under the `@dragonish` scope as a global type.

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
