import { ValidationPipeOptions } from '@nestjs/common';

export const validationOptions: ValidationPipeOptions = {
  transform: true,
  validationError: { target: false },
};
