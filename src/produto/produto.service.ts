import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriaProdutoDto } from './dto/cria-produto.dto';
import { ListaProdutoDto } from './dto/lista-produto.dto';

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
}
