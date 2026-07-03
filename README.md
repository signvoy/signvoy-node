# @signvoy/node

Official Node.js / TypeScript SDK for the [Signvoy](https://signvoy.com) e-signature API.

[![npm](https://img.shields.io/npm/v/@signvoy/node)](https://www.npmjs.com/package/@signvoy/node)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Installation

```bash
npm install @signvoy/node
# or
pnpm add @signvoy/node
```

## Quick start

```typescript
import Signvoy from "@signvoy/node";

const signvoy = new Signvoy({
  apiKey: process.env.SIGNVOY_API_KEY!,
  workspaceId: process.env.SIGNVOY_WORKSPACE_ID!,
});

// Create a document from a template
const doc = await signvoy.documents.create({
  templateId: "your-template-uuid",
  name: "Q3 2026 Service Agreement",
  recipients: [
    { roleKey: "client", name: "Acme Corp", email: "legal@acme.com" },
  ],
});

// Send for signing
await signvoy.documents.send(doc.id);

// When the document.completed webhook fires, download the signed PDF
const { url } = await signvoy.documents.signedPdf(doc.id);
console.log("Download:", url);
```

## Webhook verification

```typescript
import { verifyWebhookSignature } from "@signvoy/node/webhooks";

app.post("/webhooks/signvoy", express.raw({ type: "application/json" }), (req, res) => {
  const valid = verifyWebhookSignature(
    req.body,
    req.headers["signvoy-signature"] as string,
    process.env.SIGNVOY_WEBHOOK_SECRET!,
  );
  if (!valid) return res.status(401).send("Invalid signature");

  const event = JSON.parse(req.body.toString());
  // handle event.type
  res.sendStatus(200);
});
```

## Documentation

- [Quickstart guide](https://www.signvoy.com/developers/quickstart)
- [API Reference](https://www.signvoy.com/developers/reference)
- [Webhooks guide](https://www.signvoy.com/developers/webhooks)

## Get an API key

Sign up at [signvoy.com](https://signvoy.com) → Workspace Settings → API Keys.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The `generated/` directory is auto-generated from the OpenAPI spec — edit `src/` instead.

## License

MIT — see [LICENSE](LICENSE).
