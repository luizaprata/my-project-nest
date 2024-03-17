import { IsNotEmpty, IsNumber } from 'class-validator';

export class CriaProdutoDto {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  usuarioId: string;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  nome: string;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  @IsNumber()
  valor: number;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  @IsNumber()
  quantidade: number;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  descricao: string;

  @IsNotEmpty({ message: 'Nome obrigatório' })
  categoria: string;

  constructor(
    usuarioId: string,
    nome: string,
    valor: number,
    quantidade: number,
    descricao: string,
    categoria: string,
  ) {
    this.usuarioId = usuarioId;
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
    this.descricao = descricao;
    this.categoria = categoria;
  }
}
