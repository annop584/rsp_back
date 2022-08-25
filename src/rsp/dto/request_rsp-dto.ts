import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsEmail,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class RequestRspDto {
  @IsEmail()
  @MinLength(4)
  // @MaxLength(20)
  email: string;

  @IsNumber()
  @Min(0)
  @Max(2)
  user_rcp: number;

  @IsNumber()
  @Min(0)
  @Max(2)
  bot_rcp: number;
}
