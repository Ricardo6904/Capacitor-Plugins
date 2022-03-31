export interface SateliteCountPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
