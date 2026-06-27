import { Module } from '@nestjs/common';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from './submission.service';
import { GradingResultService } from './grading-result.service';
import { GradingResultRepository } from './grading-result.repository';

@Module({
  controllers: [SubmissionController],
  providers: [SubmissionService, GradingResultService, GradingResultRepository],
  exports: [SubmissionService, GradingResultService],
})
export class SubmissionModule {}
