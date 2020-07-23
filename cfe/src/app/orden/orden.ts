import { Cliente } from'../cliente/cliente'


export class Orden {
  idOrd:string;
  noOrd:string;
  fechOrd:string;
  rpuOrd:number;
  nCuenOrd:string;
  tarifaOrd:number;
  t02Ord:string;
  giroOrd:string;
  hilosOrd:string;
  faseOrd:string;
  anomOrd:string;
  medIqzOrd:string;
  medDerOrd:string;
  horaIncOrd:string;
  horaFinOrd:string;
  atendOrd:string;
  resibOrd:string;
  rpeOrd:string;
  identNOrd:string;
  trabajoIdTrab:string;
  zonaIdZon:string;
  agenciaIdAge:string;
  usuarioIdUsu:string;
  clienteIdClient:string;
  ubicacionIdUbi:number;
  cliente:Cliente;
}
