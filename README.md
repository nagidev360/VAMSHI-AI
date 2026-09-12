# TEXTILE DESIGN AI

A professional full-stack Next.js textile design studio: upload one reference image, automatically analyze its visual language, and generate exactly six new design directions without a required text prompt.

## Workflow

`Upload → Sharp inspection → Cerebras structured reasoning → 6 variation specs → image-generation provider → six outputs`

Cerebras is used for reasoning and structured design instructions. A separate image-generation provider produces the artwork.

## Stack

- Next.js + React + TypeScript
- Tailwind CSS
- Sharp for server-side image inspection
- Cerebras API for structured reasoning
- Swappable image-generation provider (OpenAI image API included)
- ScrapingBee server-side reference research endpoint
- S3-compatible storage abstraction for production

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add secrets only to `.env.local` or your deployment secret manager. Never commit `.env` files.

## API

- `POST /api/analyze` — validates and inspects the reference and creates structured AI analysis.
- `POST /api/generate` — generates six variations.
- `POST /api/regenerate` — regenerates one variation.
- `POST /api/upscale` — requests a high-resolution generation.
- `POST /api/reference-research` — optional legitimate public-web research through ScrapingBee.
- `POST /api/download-all` — creates a ZIP containing six generated PNG data URLs.
- `GET /api/health` — safe configuration status only.

## Production notes

Set a real S3-compatible bucket and replace local/browser gallery persistence with authenticated durable storage for production. Add platform-level rate limiting/WAF in front of the API. The starter intentionally does not expose any API key to browser JavaScript.
