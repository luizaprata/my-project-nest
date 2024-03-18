import {
  IsNotEmpty,
  IsNumber,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { CriaProdutoImagemDto } from './cria-produto-imagem.dto';
import { CriaProdutoCaracteristicaDto } from './cria-produto-caracteristica.dto';
import { Type } from 'class-transformer';

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

  @ArrayMinSize(1, { message: 'Deve conter pelo menos 1 imagem' })
  @ValidateNested({ each: true })
  @Type(() => CriaProdutoImagemDto)
  imagens: CriaProdutoImagemDto[];

  @ArrayMinSize(1, { message: 'Deve conter pelo menos 1 característica' })
  @ValidateNested({ each: true })
  @Type(() => CriaProdutoCaracteristicaDto)
  caracteristicas: CriaProdutoCaracteristicaDto[];

  constructor(
    usuarioId: string,
    nome: string,
    valor: number,
    quantidade: number,
    descricao: string,
    categoria: string,
    imagens: CriaProdutoImagemDto[],
    caracteristicas: CriaProdutoCaracteristicaDto[],
  ) {
    this.usuarioId = usuarioId;
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
    this.descricao = descricao;
    this.categoria = categoria;
    this.imagens = imagens;
    this.caracteristicas = caracteristicas;
  }
}
