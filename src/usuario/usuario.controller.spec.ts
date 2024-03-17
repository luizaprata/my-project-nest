import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  describe('listaTodosUsuarios', () => {
    it('should call listaTodosUsuarios method of UsuarioService', () => {
      controller.listaTodosUsuarios();
      expect(service.listaTodosUsuarios).toHaveBeenCalled();
    });
  });
});
