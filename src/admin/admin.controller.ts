import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('admin')
export class AdminController {
    @Get()
    index(): string{
        return "Admin Page";
    }
    
    @Get()
    async findAll(): Promise<any[]>{
        return [];
        // async function returns a promise
    }

    @Get()
    findAlls(): Observable<any[]>{
        return of([])
    }
}
