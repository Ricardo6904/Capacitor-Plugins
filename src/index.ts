import { registerPlugin } from '@capacitor/core';

import type { SateliteCountPlugin } from './definitions';

const SateliteCount = registerPlugin<SateliteCountPlugin>('SateliteCount', {
  web: () => import('./web').then(m => new m.SateliteCountWeb()),
});

export * from './definitions';
export { SateliteCount };
