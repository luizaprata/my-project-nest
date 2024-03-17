import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity({ name: 'produto_imagens' })
export class ProdutoImagem {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'produto_id', length: 128, nullable: false })
  produtoId: string;

  @Column({ name: 'url', length: 128, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 256, nullable: false })
  descricao: string;

  @ManyToOne(() => Produto, (produto) => produto.imagens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  produto: Produto;
}
