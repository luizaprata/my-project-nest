import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDto } from './dto/lista-usuario.dto';
import { CriaUsuarioDto } from './dto/cria-usuario.dto';
import { AtualizaUsuarioDto } from './dto/atualiza-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async criaUsuario(criaUsuarioDto: CriaUsuarioDto) {
    return await this.usuarioRepository.save(criaUsuarioDto);
  }

  async listaTodosUsuarios() {
    const todosUsuarios = await this.usuarioRepository.find();
    return todosUsuarios.map(
      (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome),
    );
  }

  async encontreUsuario(id: string) {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });
    return new ListaUsuarioDto(usuario.id, usuario.nome);
  }

  async atualizaUsuario(id: string, atualizaUsuarioDto: AtualizaUsuarioDto) {
    return await this.usuarioRepository.update(id, atualizaUsuarioDto);
  }

  async removeUsuario(id: string) {
    return await this.usuarioRepository.delete(id);
  }
}
