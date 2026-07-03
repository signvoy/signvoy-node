
# CreateTemplateDto


## Properties

Name | Type
------------ | -------------
`name` | string
`fileName` | string
`pageCount` | number
`content` | object

## Example

```typescript
import type { CreateTemplateDto } from '@signvoy/node'

// TODO: Update the object below with actual values
const example = {
  "name": NDA Template,
  "fileName": nda.pdf,
  "pageCount": 3,
  "content": null,
} satisfies CreateTemplateDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTemplateDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


