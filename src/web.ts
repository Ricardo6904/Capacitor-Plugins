import { WebPlugin } from '@capacitor/core';

import type { SateliteCountPlugin } from './definitions';

export class SateliteCountWeb extends WebPlugin implements SateliteCountPlugin {
  runNativeCode(options: { name: string; }): Promise<{ name: any; }> {
    return new Promise(result => {
      console.log('Navegador no disponible', options, options.name)
      result({name:'none'})
    })
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
