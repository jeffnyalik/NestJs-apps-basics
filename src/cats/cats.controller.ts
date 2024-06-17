import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string{
        console.log("TESTING FOR THE CATS CONTROLLER");
        return "The cats controller has been updated with the req";
    }

    @Get("abc*ndfh")
    findAllCards(): string{
        return "this is just a wild card";
    }

    @Post()
    create(): string{
        return "action that adds an item";
    }
}
