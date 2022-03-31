import { WebPlugin } from '@capacitor/core';

import type { SateliteCountPlugin } from './definitions';

export class SateliteCountWeb extends WebPlugin implements SateliteCountPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
