import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDto } from './dto/cria-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  cria(@Body() criaUsuarioDto: CriaUsuarioDto) {
    return this.usuarioService.criaUsuario(criaUsuarioDto);
  }

  @Get()
  listaTodosUsuarios() {
    return this.usuarioService.listaTodosUsuarios();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usuarioService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(+id);
  // }
}
