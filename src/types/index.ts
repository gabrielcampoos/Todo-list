export interface Tarefa {
  id: string;
  titulo: string;
  valor?: string;
  criadoEm: string;
  onClick?: () => void;
}
