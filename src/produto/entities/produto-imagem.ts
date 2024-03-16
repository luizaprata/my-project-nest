import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_imagens' })
export class ProdutoImagem {
  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'url', length: 128, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 256 })
  descricao: string;
}
