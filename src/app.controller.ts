import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Render('home')
  @Get()
  showHomePage() {
    return { title: "Home Page" };
  }
}
