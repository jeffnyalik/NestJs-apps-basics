import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from 'src/dtos/create-cat.dtos';
import { UpdateCatDto } from 'src/dtos/update-cat.dtos';
import { Cat } from 'src/interface/cats.interface';
import { CatsService } from 'src/services/cats/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService){}
    @Get()
    async findAll(): Promise<Cat[]>{
        console.log(this.catService.findAll());
        return this.catService.findAll();
    }

    @Get("abc*ndfh")
    findAllCards(): string{
        return "this is just a wild card";
    }

    @Post()
    @Header("Cache-Control", "none")
    @HttpCode(201)
    async create(@Body() createCatDto: CreateCatDto){
        this.catService.create(createCatDto);
        console.log(this.catService.create(createCatDto));
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
