export interface SateliteCountPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  runNativeCode(options:{name:string}):Promise<{name:any}>;
}
