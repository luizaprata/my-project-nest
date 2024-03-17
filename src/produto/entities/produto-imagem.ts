import { Entity, Column, ManyToOne } from 'typeorm';
import { Produto } from './produto.entity';

@Entity({ name: 'produto_imagens' })
export class ProdutoImagem {
  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'url', length: 128, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 256, nullable: false })
  descricao: string;

  @ManyToOne(() => Produto, (produto) => produto.imagens)
  produto: Produto;
}
