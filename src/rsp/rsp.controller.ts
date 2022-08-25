import {
  ArgumentMetadata,
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Header,
  Injectable,
  Param,
  PipeTransform,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { RequestRspDto } from './dto/request_rsp-dto';
import { RspService } from './rsp.service';

@Controller('rsp')
export class RspController {
  constructor(
    private readonly rspService: RspService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('botrandomrsp')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async createRestaurant() {
    return this.rspService.getRandom_rsp();
  }

  @Post('sendrsp')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async sendrsp(@Body() reqRspDto: RequestRspDto) {
    return this.rspService.save_rsp_stat(reqRspDto);
  }

  @Post('gethighscore')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async getHighscore() {
    return this.rspService.gethighscore();
  }
}
