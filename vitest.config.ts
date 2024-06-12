import {
   configDefaults,
   defineConfig } from 'vitest/config'

export default defineConfig({
   test: {
      exclude: [...configDefaults.exclude],
      include: ['./tests/**/*.spec.ts'],
      coverage: {
         include: ['src/**'],
         exclude: ['test/**'],
         provider: 'v8',
         reporter: ['text', 'json', 'html']
      },
      environment: 'node',
      reporters: ['default', 'html'],
      setupFiles: './tests/setupExtend.ts',  // Extends `expect` with custom matchers.
      globalSetup: './tests/setupGlobal.js'  // Generate F64 source / tests once before tests runs.
   }
});
