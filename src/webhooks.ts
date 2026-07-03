import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Verify the HMAC-SHA256 signature on an inbound Signvoy webhook delivery.
 *
 * @param rawBody  Raw request body (Buffer or string). Do NOT parse the JSON
 *                 before calling this function — the signature covers the raw bytes.
 * @param header   Value of the `Signvoy-Signature` HTTP header.
 * @param secret   The `whsec_…` signing secret from webhook creation /
 *                 rotate-secret. Keep this in an environment variable.
 * @returns        `true` when the signature is valid; `false` otherwise.
 *
 * @example
 * ```ts
 * import { verifyWebhookSignature } from "@signvoy/node/webhooks";
 *
 * app.post("/hooks/signvoy", express.raw({ type: "*\/*" }), (req, res) => {
 *   const valid = verifyWebhookSignature(
 *     req.body,
 *     req.headers["signvoy-signature"] as string,
 *     process.env.SIGNVOY_WEBHOOK_SECRET!,
 *   );
 *   if (!valid) return res.status(401).send("Bad signature");
 *
 *   const event = JSON.parse(req.body.toString());
 *   // handle event …
 *   res.sendStatus(200);
 * });
 * ```
 */
export function verifyWebhookSignature(
  rawBody: Buffer | string,
  header: string,
  secret: string,
): boolean {
  if (!header || !secret) return false;

  // Header format: "t=<unix-seconds>,v1=<hex-signature>"
  const parts: Record<string, string> = {};
  for (const segment of header.split(",")) {
    const eq = segment.indexOf("=");
    if (eq === -1) continue;
    parts[segment.slice(0, eq)] = segment.slice(eq + 1);
  }

  const timestamp = parts["t"];
  const signature = parts["v1"];
  if (!timestamp || !signature) return false;

  // Signed payload = "<timestamp>.<raw-body>"
  const payload = `${timestamp}.${rawBody.toString()}`;
  const expected = createHmac("sha256", secret)
    .update(payload, "utf8")
    .digest("hex");

  // Timing-safe comparison to resist timing attacks.
  try {
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length) return false;
    return timingSafeEqual(sigBuf, expBuf);
  } catch {
    return false;
  }
}

/** Type-safe event envelope. */
export interface SignvoyWebhookEvent<T = unknown> {
  id: string;
  type: string;
  createdAt: string;
  workspaceId: string;
  data: T;
}
