import { ListaProdutoCaracteristicaDto } from './lista-produto-caracteristica.dto';
import { ListaProdutoImagemDto } from './lista-produto-imagem.dto';

export class ListaProdutoDto {
  id: string;
  nome: string;
  valor: number;
  imagens: ListaProdutoImagemDto[];
  caracteristicas: ListaProdutoCaracteristicaDto[];

  constructor(
    id: string,
    nome: string,
    valor: number,
    imagens: ListaProdutoImagemDto[],
    caracteristicas: ListaProdutoCaracteristicaDto[],
  ) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.imagens = imagens;
    this.caracteristicas = caracteristicas;
  }
}
