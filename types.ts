export interface ExcuseResponse {
  excuse: string;
}

export enum AppStatus {
  OFFLINE = 'OFFLINE',
  ONLINE = 'ONLINE',
  ERROR = 'ERROR'
}