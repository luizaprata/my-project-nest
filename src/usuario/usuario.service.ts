import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDto } from './dto/lista-usuario.dto';
import { CriaUsuarioDto } from './dto/cria-usuario.dto';

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

  // encontreUsuario(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  // atualizaUsuario(id: number, atualizaUsuarioDto: AtualizaUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }

  // removeUsuario(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}
