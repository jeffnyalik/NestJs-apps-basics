import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from 'src/dtos/create-cat.dtos';
import { UpdateCatDto } from 'src/dtos/update-cat.dtos';

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
    async create(@Body() createCatDto: CreateCatDto){
        console.log(createCatDto);
        return createCatDto;
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

    @Get(":id")
    findOnes(@Param("id") id:string){
        console.log(`${id}`);
    }

    @Put(":id")
    updateCat(@Param("id") id:string, @Body() updateCatDto: UpdateCatDto){
        console.log(id);
        return `This action updates ${id}`;
    }

    @Delete(":id")
    removeCat(@Param("id") id:string){
        console.log(id);
        return `This action removes ${id} Cat`;
    }

    
}
