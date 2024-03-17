import { ValidationPipeOptions } from '@nestjs/common';

export const validationOptions: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
  validationError: { target: false },
};
