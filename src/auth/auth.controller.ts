import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/singup')
  // @UsePipes(ValidationPipe) 이렇게해도 @Body(ValidationPipe)랑 같음
  signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<void> {
    return this.authService.signUp(authDto);
  }
}
