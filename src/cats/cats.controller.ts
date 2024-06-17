import { Controller, Get, Header, HttpCode, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    @Redirect("https://nestjs.com", 200)
    findAll(@Req() request: Request): string{
        console.log("TESTING FOR THE CATS CONTROLLER");
        return "The cats controller has been updated with the req";
    }

    @Get("abc*ndfh")
    findAllCards(): string{
        return "this is just a wild card";
    }

    @Post()
    @Header("Cache-Control", "none")
    @HttpCode(201)
    create(): string{
        return "action that adds an item";
    }
}
