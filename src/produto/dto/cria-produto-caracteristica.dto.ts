import { IsNotEmpty, IsUrl } from 'class-validator';

export class CriaProdutoImagemDto {
  produtoId: string;

  @IsNotEmpty({ message: 'Nome da característica do produto obrigatória' })
  nome: string;

  @IsNotEmpty({ message: 'Descrição da característica do produto obrigatória' })
  descricao: string;

  constructor(url: string, descricao: string, produtoId: string = '') {
    this.produtoId = produtoId;
    this.nome = url;
    this.descricao = descricao;
  }
}
