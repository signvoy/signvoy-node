
# AnonymousCheckoutStatusDto


## Properties

Name | Type
------------ | -------------
`plan` | string
`interval` | string
`seats` | number
`email` | string
`paid` | boolean

## Example

```typescript
import type { AnonymousCheckoutStatusDto } from '@signvoy/node'

// TODO: Update the object below with actual values
const example = {
  "plan": team,
  "interval": month,
  "seats": 10,
  "email": alex@example.com,
  "paid": true,
} satisfies AnonymousCheckoutStatusDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnonymousCheckoutStatusDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


