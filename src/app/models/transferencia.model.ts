export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string | number;
  data?: string;
}

export interface RootObject {
  transferencias: Transferencia[];
}
