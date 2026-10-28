// Cloudflare Worker reverse proxy (alternative to Netlify).
// Deploy this Worker and attach your custom domain to it.
// It fetches the official space-z app behind the scenes and
// rewrites redirects back to your custom domain.
// The app itself is not copied or changed here.
const ORIGIN = "https://mujaddidyasultaniapp.space-z.ai";
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const originUrl = ORIGIN + url.pathname + url.search;
    const response = await fetch(originUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    });
    const headers = new Headers(response.headers);
    const location = headers.get("Location");
    if (location && location.startsWith(ORIGIN)) {
      headers.set("Location", url.origin + location.slice(ORIGIN.length));
    }
    return new Response(response.body, { status: response.status, headers });
  },
};
