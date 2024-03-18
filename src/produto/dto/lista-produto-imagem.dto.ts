export class ListaProdutoImagemDto {
  url: string;
  descricao: string;
  constructor(url: string, descricao: string) {
    this.url = url;
    this.descricao = descricao;
  }
}
