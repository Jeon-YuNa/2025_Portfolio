import { Test, TestingModule } from '@nestjs/testing';
import { TodayVisitorsService } from './today-visitors.service';

describe('TodayVisitorsService', () => {
  let service: TodayVisitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodayVisitorsService],
    }).compile();

    service = module.get<TodayVisitorsService>(TodayVisitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
