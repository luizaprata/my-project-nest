import { IsNotEmpty, IsUrl } from 'class-validator';

export class CriaProdutoImagemDto {
  produtoId: string = '';

  @IsNotEmpty({ message: 'URL da imagem obrigatória' })
  @IsUrl({}, { message: 'URL inválida' })
  url: string;

  @IsNotEmpty({ message: 'Descrição da imagem obrigatória' })
  descricao: string;

  constructor(url: string, descricao: string, produtoId: string = '') {
    this.produtoId = produtoId;
    this.url = url;
    this.descricao = descricao;
  }
}
