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
import { AtualizaProdutoDto } from './dto/atualiza-produto.dto';

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

  @Get(':id')
  encontreProduto(@Param('id') id: string) {
    return this.produtoService.encontreProduto(id);
  }

  @Patch(':id')
  atualizaProduto(
    @Param('id') id: string,
    @Body() updateProdutoDto: AtualizaProdutoDto,
  ) {
    return this.produtoService.atualizaProduto(id, updateProdutoDto);
  }

  @Delete(':id')
  removeProduto(@Param('id') id: string) {
    return this.produtoService.removeProduto(id);
  }
}
