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

export class GetScoreDto {
  @IsEmail()
  @MinLength(4)
  // @MaxLength(20)
  email: string;
}
