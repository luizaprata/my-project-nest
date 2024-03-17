import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristica {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'nome', length: 128, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 256, nullable: false })
  descricao: string;

  @ManyToOne(() => Produto, (produto) => produto.caracteristicas, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  produto: Produto;
}
