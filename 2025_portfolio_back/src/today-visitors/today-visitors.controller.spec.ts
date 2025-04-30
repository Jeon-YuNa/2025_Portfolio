import { Test, TestingModule } from '@nestjs/testing';
import { TodayVisitorsController } from './today-visitors.controller';
import { TodayVisitorsService } from './today-visitors.service';

describe('TodayVisitorsController', () => {
  let controller: TodayVisitorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodayVisitorsController],
      providers: [TodayVisitorsService],
    }).compile();

    controller = module.get<TodayVisitorsController>(TodayVisitorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
