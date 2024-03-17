import { IsEmail, IsNotEmpty } from 'class-validator';

export class CriaUsuarioDto {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha obrigatória' })
  senha: string;
  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = nome;
    this.senha = nome;
  }
}
