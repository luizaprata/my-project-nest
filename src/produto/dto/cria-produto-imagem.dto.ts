import { IsNotEmpty, IsUrl } from 'class-validator';

export class CriaProdutoImagemDto {
  produtoId: string;

  @IsNotEmpty({ message: 'URL da imagem obrigatória' })
  url: string;

  @IsNotEmpty({ message: 'Descrição da imagem obrigatória' })
  @IsUrl({}, { message: 'URL inválida' })
  descricao: string;

  constructor(produtoId: string, url: string, descricao: string) {
    this.produtoId = produtoId;
    this.url = url;
    this.descricao = descricao;
  }
}
