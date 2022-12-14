# [Integrar com nestjs](https://docs.nestjs.com/recipes/prisma)
- Apenas os repositories da camada do prisma, tem acesso ao banco
```tsx
// criar arquivo de configuração como na docs e em app.module.ts
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
```
# Comandos
```sh
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
```

- Rodar migration
```sh
npx prisma migrate dev
```

- Visualizar dados
```sh
npx prisma studio
```

## Query
- buscar todos registros
```tsx
return this.prismaService.notification.findMany();
```