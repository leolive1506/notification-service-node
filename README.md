# Microsservice
## Dois tipo arquitetura comum
- Arquitetura na hora de deploy, hospedagem
### 1. Uma única base de código (monolito)
- App
- Db
- Comunicação app batendo no banco
- Vantagem:
    - Comunicação muito simples com banco
- Desvantagem:
    - Conforme escala a aplicação
    - Precisa mais recusos (memória, processamento, etc)
    - Um app muito grande com um único banco de dados pode encavalar as coisas
        - Uma parte pode derrubar outra nada ver
    

### 2. Microsservice
- Divide a aplicação em menores aplicações
- Muda pouco em questão de código
- Muda muito na hospedagem, escalação
- Muda muito na comunicação entre os serviços
    - Indepencia entre os serviços
    - Indepencia entre os banco de dados
        - Um para cada
        - Desvantagem:
            - Mais caro
            - Dependencia de dados em um outro service
                - Como resolver
                    - Não resolver com buscas nos outros microservices
                        - Joga fora a parte de cada service funcione de forma isolada
                    - Solução
                        - Duplicidade de dados
                        - Ex:
                            - Serviço de checkout envia uma mensagem (comunicação assincrona) para quais serviços quiserem consumir com os dados
                                - O serviço que tiver ouvindo, anota a parte que lhe interessa

# NestJS x outros frameworks
# [NestJS](https://docs.nestjs.com/)
- Um dos frameworks mais completos node
- Um frameworks opninado
    - Traz opnião na forma que deve criar aplicação
    - Uma estrutra prévia
    - Não é 100% livre
    - Tem algumas libs integradas e tem prioridade pra usar elas
        - Usar alguma externa é preciso aprender como nest acopla novas libs a ele
    - Opnião do nest ajuda na tomada de decisão
        - Mais produtividade
    
# DTO (Data transfer object)
- Referencia objectos que carregam dados mas não tem comportamento, somente carregamento de dados
    - Ex: CreateNotificationBody

# Verificar erro typescript
```sh
npx tsc --noEmit
```