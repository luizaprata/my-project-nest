import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDto } from './dto/cria-usuario.dto';
import { AtualizaUsuarioDto } from './dto/atualiza-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  private readonly logger = new Logger(UsuarioController.name);

  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  cria(@Body() criaUsuarioDto: CriaUsuarioDto) {
    return this.usuarioService.criaUsuario(criaUsuarioDto);
  }

  @Get()
  listaTodosUsuarios() {
    return this.usuarioService.listaTodosUsuarios();
  }

  @Get(':id')
  encontreUsuario(@Param('id') id: string) {
    return this.usuarioService.encontreUsuario(id);
  }

  @Patch(':id')
  atualizaUsuario(
    @Param('id') id: string,
    @Body() updateUsuarioDto: AtualizaUsuarioDto,
  ) {
    return this.usuarioService.atualizaUsuario(id, updateUsuarioDto);
  }

  @Delete(':id')
  removeUsuario(@Param('id') id: string) {
    return this.usuarioService.removeUsuario(id);
  }
}
