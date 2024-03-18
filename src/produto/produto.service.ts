import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriaProdutoDto } from './dto/cria-produto.dto';
import { ListaProdutoDto } from './dto/lista-produto.dto';
import { AtualizaProdutoDto } from './dto/atualiza-produto.dto';
import { ListaProdutoImagemDto } from './dto/lista-produto-imagem';
import { ProdutoImagem } from './entities/produto-imagem.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,

    @InjectRepository(ProdutoImagem)
    private readonly ProdutoImagemRepository: Repository<ProdutoImagem>,
  ) {}

  async listaTodosProdutos() {
    const listaTodosProdutos = await this.produtoRepository.find();
    return listaTodosProdutos.map((produto) => {
      const imagens = produto.imagens.map(
        (imagem) => new ListaProdutoImagemDto(imagem.url),
      );
      return new ListaProdutoDto(
        produto.id,
        produto.nome,
        produto.valor,
        imagens,
      );
    });
  }

  async criaProduto(criaProdutoDto: CriaProdutoDto) {
    console.log('criaProdutoDto', criaProdutoDto);
    const novoProduto = await this.produtoRepository.save(criaProdutoDto);
    return novoProduto;
  }

  async encontreProduto(id: string) {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
    });

    const imagens = produto.imagens.map(
      (imagem) => new ListaProdutoImagemDto(imagem.url),
    );
    return new ListaProdutoDto(
      produto.id,
      produto.nome,
      produto.valor,
      imagens,
    );
  }

  async atualizaProduto(id: string, atualizaProdutoDto: AtualizaProdutoDto) {
    return await this.produtoRepository.update(id, atualizaProdutoDto);
  }

  async removeProduto(id: string) {
    return await this.produtoRepository.delete(id);
  }
}
