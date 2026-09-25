// Cliente HTTP tipado para WordtapAPI (Go Echo v5)

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/services/v1";

export interface ApiHealthResponse {
  status: string;
  database: string;
  uptime?: string;
  timestamp?: string;
}

export async function checkApiHealth(): Promise<{
  connected: boolean;
  data?: ApiHealthResponse;
  error?: string;
}> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${API_BASE_URL}/health`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return { connected: true, data };
    }
    return { connected: false, error: `HTTP ${res.status}` };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error de conexión";
    return { connected: false, error: message };
  }
}

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<{ data: T | null; error: string | null }> {
  try {
    const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options?.headers || {}),
      },
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      return { data: null, error: `HTTP ${res.status}: ${errBody || res.statusText}` };
    }

    const data = await res.json();
    return { data, error: null };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error de red";
    return { data: null, error: message };
  }
}
