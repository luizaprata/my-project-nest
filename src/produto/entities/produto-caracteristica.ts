import { Entity, Column } from 'typeorm';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'nome', length: 128, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 256 })
  descricao: string;
}
