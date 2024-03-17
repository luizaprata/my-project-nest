import { Entity, Column, ManyToOne } from 'typeorm';
import { Produto } from './produto.entity';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'nome', length: 128, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 256, nullable: false })
  descricao: string;

  @ManyToOne(() => Produto, (produto) => produto.caracteristicas)
  produto: Produto;
}
