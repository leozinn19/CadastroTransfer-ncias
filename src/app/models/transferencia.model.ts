export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string;
  data: Date;
}

export interface RootObject {
  transferencias: Transferencia[];
}
