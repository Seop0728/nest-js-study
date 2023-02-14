import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} : 이런옵션은 존재하지않아요`);
    }

    return value;
  }

  private isStatusValid(status) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
