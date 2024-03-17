import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CriaProdutoDto } from './dto/cria-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createProdutoDto: CriaProdutoDto) {
    return this.produtoService.criaProduto(createProdutoDto);
  }

  @Get()
  listaTodosProdutos() {
    return this.produtoService.listaTodosProdutos();
  }
}
