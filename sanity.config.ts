import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import producto from './sanity/schemaTypes/producto';

export default defineConfig({
  projectId: 'okaztm0k',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [producto],
  },
});