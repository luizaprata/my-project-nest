import { ListaProdutoImagemDto } from './lista-produto-imagem';

export class ListaProdutoDto {
  id: string;
  nome: string;
  valor: number;
  imagens: ListaProdutoImagemDto[];

  constructor(
    id: string,
    nome: string,
    valor: number,
    imagens: ListaProdutoImagemDto[],
  ) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.imagens = imagens;
  }
}
