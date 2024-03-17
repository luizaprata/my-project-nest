import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriaProdutoDto } from './dto/cria-produto.dto';
import { ListaProdutoDto } from './dto/lista-produto.dto';
import { AtualizaProdutoDto } from './dto/atualiza-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async listaTodosProdutos() {
    const listaTodosProdutos = await this.produtoRepository.find();
    return listaTodosProdutos.map(
      (produto) => new ListaProdutoDto(produto.id, produto.nome, produto.valor),
    );
  }

  async criaProduto(criaProdutoDto: CriaProdutoDto) {
    return await this.produtoRepository.save(criaProdutoDto);
  }

  async encontreProduto(id: string) {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
    });
    return new ListaProdutoDto(produto.id, produto.nome, produto.valor);
  }

  async atualizaProduto(id: string, atualizaProdutoDto: AtualizaProdutoDto) {
    return await this.produtoRepository.update(id, atualizaProdutoDto);
  }

  async removeProduto(id: string) {
    return await this.produtoRepository.delete(id);
  }
}
