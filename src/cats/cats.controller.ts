import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
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

    @Get("docs")
    @Redirect("https://nestjs.com", 302)
    getDocs(@Query('version') version){
        if(version && version === "5"){
            return {url: "https://docs.nestjs.com/v5/"}
        }
    }

    @Get(":id")
    findOne(@Param() params:any): string{
        console.log(`ID val: ${params.id}`);
        return `This action requires ${params.id}`;
    }
}
