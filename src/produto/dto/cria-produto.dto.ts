import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { CriaProdutoImagemDto } from './cria-produto-imagem.dto';

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

  @MinLength(1, { message: 'Deve conter pelo menos 1 imagem', each: true })
  imagens: CriaProdutoImagemDto[];

  constructor(
    usuarioId: string,
    nome: string,
    valor: number,
    quantidade: number,
    descricao: string,
    categoria: string,
    imagens: CriaProdutoImagemDto[],
  ) {
    this.usuarioId = usuarioId;
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
    this.descricao = descricao;
    this.categoria = categoria;
    this.imagens = imagens;
  }
}
