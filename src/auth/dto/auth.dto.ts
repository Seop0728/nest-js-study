import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  // class-vaildator

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(3) // 3 >=
  @MaxLength(10, {
    message: 'Max 10',
  })
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '영어랑 숫자만 입력해주세요',
  })
  password: string;
}
