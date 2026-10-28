# Mujaddidya Sultania — reverse proxy

## What this does
Visitors open your custom domain. A proxy fetches the official app at https://mujaddidyasultaniapp.space-z.ai/ behind the scenes and serves it back under your custom domain, so the space-z address is not shown in the address bar.

The app itself is not copied or changed here, and it must not be copied or used without the owner’s permission.

## Easiest way: Netlify (recommended)
1. In Netlify, Add new site > Import an existing project > GitHub > dastanesahal-appbuilder/mujaddidya-sultania.
2. Deploy with no build command and no publish directory change needed (the netlify.toml in this repo does the proxying).
3. Netlify will give you a site address like your-site.netlify.app. Open it and check the whole app works.
4. In Netlify, Site settings > Domain management > Add a custom domain, and add mujaddidya-sultania.is-a.dev once that name is registered, or use the Netlify address for now.
5. If you use is-a.dev, its record for this site must point to your Netlify site address, not to github.io.

## Alternative: Cloudflare Worker
Deploy worker.js as a Cloudflare Worker and attach your custom domain to the Worker. The Worker code fetches the same space-z origin and rewrites redirects back to your domain.

## Honest limit
A proxy hides the real address from the address bar and from a normal client. A determined person inspecting browser network traffic can still trace a proxied request. Do not present this as unbreakable hiding.
