/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ASTRO_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
