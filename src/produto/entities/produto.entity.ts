import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'produtos' })
export class Produto {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'usuario_id', length: 128, nullable: false })
  usuarioId: string;

  @Column({ name: 'nome', length: 128, nullable: false })
  nome: string;

  @Column({ name: 'valor', nullable: false })
  valor: number;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'descricao', length: 256, nullable: false })
  descricao: string;

  @Column({ name: 'categoria', length: 128, nullable: false })
  categoria: string;

  //   @Column({ name: 'caracteristicas' })
  //   caracteristicas: CaracteristicaProduto[];

  //   @Column({ name: 'imagens' })
  //   imagens: ImagemProduto[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
