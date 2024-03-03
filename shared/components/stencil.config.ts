import type { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'fmc-ce',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    // verbose: true,
    browserHeadless: 'new',
  },
};
