import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoCaracteristica } from './entities/produto-caracteristica.entity';
import { ProdutoImagem } from './entities/produto-imagem.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, ProdutoCaracteristica, ProdutoImagem]),
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
