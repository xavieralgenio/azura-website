# Azura — Better

A streamlined Vite + React frontend for Azura with Supabase client integration.

Run locally:

```bash
cd better
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

Environment variables (create a `.env` file at `better/`):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Deploy to Render: connect this repository and use `render.yaml` provided. For Supabase, configure the project and add the `VITE_SUPABASE_` env variables in Render.
