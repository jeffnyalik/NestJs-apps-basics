import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsService } from './services/cats/cats.service';
import { AdminService } from './services/admin/admin.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService, CatsService, AdminService],
})
export class AppModule {}
