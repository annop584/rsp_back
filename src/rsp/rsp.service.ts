import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HighscoreRepository } from './repository/highscore.repository';
import { RequestRspDto } from './dto/request_rsp-dto';
import { UserRepository } from 'src/users/repository/users.repository';

@Injectable()
export class RspService {
  constructor(
    @InjectRepository(HighscoreRepository)
    private highscoreRepository: HighscoreRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  //random rsp
  getRandom_rsp() {
    return Math.floor(Math.random() * 3);
  }

  async gethighscore() {
    const highscore = await this.highscoreRepository.getHighscore();
    if (highscore) {
      console.log('have highscore');

      return {
        success: true,
        data: { highscore: highscore.highscore },
        message: 'success',
      };
    } else {
      console.log('no highscore');
      await this.highscoreRepository.createHighscore();
      return {
        success: true,
        data: { highscore: 0 },
        message: 'success',
      };
    }
  }

  async save_rsp_stat(reqRspDto: RequestRspDto) {
    const user = await this.userRepository.updateUser(reqRspDto.email);
    const highscore = await this.highscoreRepository.getHighscore();
    let resp_highscore = highscore.highscore;
    if (user.score > highscore.highscore) {
      const newhighscore = await this.highscoreRepository.updateHighscore(
        user.score,
      );
      resp_highscore = newhighscore.highscore;
    }

    return {
      success: true,
      data: { yourscore: user.score, highscore: resp_highscore },
      message: 'success',
    };
  }
}
