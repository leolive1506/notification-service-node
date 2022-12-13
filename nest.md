# Nest
- Controller
```ts
// rota -> app/test
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }
}
```
- Module
    - Acoplador
        - Acopla varios controllers e varios services
    - Um module pode importar outro
- Service

# Pegar dados Request
```tsx
import { Post, Body } from '@nestjs/common';
@Post()
async create(@Body() body: any) {
console.log(body);
}
```

# Validação de dados
```sh
npm i class-validator class-transformer
```
- Criar uma classe separada
```ts
import { IsNotEmpty } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;
}
```

- No controller
```ts
@Post()
async create(@Body() body: CreateNotificationBody) {}
```

- Nest por padrão não tenta validar requisições para não tentar acoplar coisas que podem deixar app lento
  - Ao trabalhar com validação, em main.ts
```ts
import { ValidationPipe } from '@nestjs/common';
app.useGlobalPipes(new ValidationPipe());
```



# dicas gerais
## Inversão de depencidas
- Recebe parametro como instancia
```ts
export class AppController {
  // usando app service, recebendo depencia no constructor
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

# Injeção de dependencia
- Forma de automotizar a inserção das depencias no momento que as classes forem instanciadas
    - Controller falou que precisa de um AppService
    ```ts
    constructor(private readonly appService: AppService) {}
    ```
    - Nest detecta que dentro do nosso **modulo** existe, uma class AppService
    ```ts
    @Module({
        imports: [],
        controllers: [AppController],
        providers: [AppService],
    })
    export class AppModule {}
    ```
    - Em que AppService precisa obrigatoriamente ter decorator @Injectable
    ```ts
    @Injectable()
    export class AppService {}
    ```
