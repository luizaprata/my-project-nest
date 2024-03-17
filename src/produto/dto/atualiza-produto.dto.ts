import { PartialType } from '@nestjs/mapped-types';
import { CriaProdutoDto } from './cria-produto.dto';

export class AtualizaProdutoDto extends PartialType(CriaProdutoDto) {}
