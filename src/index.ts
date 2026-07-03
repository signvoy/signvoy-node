/**
 * @signvoy/node — Official Signvoy TypeScript SDK
 *
 * This file is hand-authored. The generated/ directory contains the raw
 * OpenAPI client; this wrapper adds ergonomic sugar on top.
 */

import type {
  DocumentDto,
  CreateDocumentDto,
  UpdateDocumentDto,
  ApiKeyDto,
} from "../generated/models/index.js";

export type { DocumentDto, CreateDocumentDto, UpdateDocumentDto, ApiKeyDto };

export interface SignvoyOptions {
  apiKey: string;
  workspaceId: string;
  /**
   * Base URL for the Signvoy API.
   * Defaults to `https://api.signvoy.com`.
   */
  baseUrl?: string;
}

export class Signvoy {
  private readonly baseUrl: string;
  private readonly defaultHeaders: Record<string, string>;

  readonly documents: DocumentsResource;
  readonly templates: TemplatesResource;
  readonly webhooks: WebhooksResource;

  constructor(options: SignvoyOptions) {
    this.baseUrl = (options.baseUrl ?? "https://api.signvoy.com").replace(/\/$/, "");
    this.defaultHeaders = {
      Authorization: `Bearer ${options.apiKey}`,
      "X-Workspace-Id": options.workspaceId,
      "Content-Type": "application/json",
    };

    this.documents = new DocumentsResource(this);
    this.templates = new TemplatesResource(this);
    this.webhooks = new WebhooksResource(this);
  }

  /** @internal */
  async request<T>(
    method: "GET" | "POST" | "PATCH" | "DELETE",
    path: string,
    body?: unknown,
  ): Promise<T> {
    const url = `${this.baseUrl}/v1${path}`;
    const res = await fetch(url, {
      method,
      headers: this.defaultHeaders,
      body: body != null ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }));
      throw new SignvoyError(res.status, (err as { message?: string }).message ?? res.statusText, err);
    }

    if (res.status === 204) return undefined as T;
    return res.json() as Promise<T>;
  }
}

export class SignvoyError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly body: unknown,
  ) {
    super(`Signvoy API error ${status}: ${message}`);
    this.name = "SignvoyError";
  }
}

// ---------------------------------------------------------------------------
// Resource classes
// ---------------------------------------------------------------------------

class DocumentsResource {
  constructor(private readonly client: Signvoy) {}

  create(dto: CreateDocumentDto): Promise<DocumentDto> {
    return this.client.request("POST", "/documents", dto);
  }

  list(): Promise<DocumentDto[]> {
    return this.client.request("GET", "/documents");
  }

  get(id: string): Promise<DocumentDto> {
    return this.client.request("GET", `/documents/${id}`);
  }

  update(id: string, dto: UpdateDocumentDto): Promise<DocumentDto> {
    return this.client.request("PATCH", `/documents/${id}`, dto);
  }

  send(id: string): Promise<DocumentDto> {
    return this.client.request("POST", `/documents/${id}/send`);
  }

  void(id: string): Promise<DocumentDto> {
    return this.client.request("POST", `/documents/${id}/void`);
  }

  delete(id: string): Promise<void> {
    return this.client.request("DELETE", `/documents/${id}`);
  }

  signedPdf(id: string): Promise<{ url: string }> {
    return this.client.request("GET", `/documents/${id}/signed-pdf`);
  }

  certificate(id: string): Promise<{ url: string }> {
    return this.client.request("GET", `/documents/${id}/certificate`);
  }

  auditTrail(id: string): Promise<unknown[]> {
    return this.client.request("GET", `/documents/${id}/audit`);
  }
}

class TemplatesResource {
  constructor(private readonly client: Signvoy) {}

  create(dto: unknown): Promise<{ templateId: string; draftVersionId: string; uploadUrl: string }> {
    return this.client.request("POST", "/templates", dto);
  }

  list(): Promise<unknown[]> {
    return this.client.request("GET", "/templates");
  }

  get(id: string): Promise<unknown> {
    return this.client.request("GET", `/templates/${id}`);
  }
}

class WebhooksResource {
  constructor(private readonly client: Signvoy) {}

  create(dto: unknown): Promise<unknown> {
    return this.client.request("POST", "/webhooks", dto);
  }

  list(): Promise<unknown[]> {
    return this.client.request("GET", "/webhooks");
  }

  get(id: string): Promise<unknown> {
    return this.client.request("GET", `/webhooks/${id}`);
  }

  delete(id: string): Promise<void> {
    return this.client.request("DELETE", `/webhooks/${id}`);
  }

  ping(id: string): Promise<unknown> {
    return this.client.request("POST", `/webhooks/${id}/ping`);
  }

  rotateSecret(id: string): Promise<unknown> {
    return this.client.request("POST", `/webhooks/${id}/rotate-secret`);
  }
}

export default Signvoy;
