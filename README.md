# satelite-plugin

Plugin que me permite realizar el conteo de satélites

## Install

```bash
npm install satelite-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`runNativeCode(...)`](#runnativecode)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### runNativeCode(...)

```typescript
runNativeCode(options: { name: string; }) => Promise<{ name: any; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;{ name: any; }&gt;</code>

--------------------

</docgen-api>
