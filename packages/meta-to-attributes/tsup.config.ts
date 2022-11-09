import { defineConfig } from "tsup"

export default defineConfig({
  name: `meta-to-attributes`,
  entry: [`src/index.ts`],
  clean: true,
  dts: true,
  splitting: true,
  format: [`cjs`, `esm`],
  target: `node14`,
  minify: true,
})
