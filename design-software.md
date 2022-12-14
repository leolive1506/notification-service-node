# Design de software
- Como tomada de decisão e como pensar no desenvolvimento é chamando processo de Design de software
- É arquitetar como as coisas deve funcionar, casos de uso
- Ex:
    - Requisitos funcionais (funcinalidades)
    - Requisitos não funcionais (não intereferem na funcionalidades mas obrigação da aplicação -> ferramentas, contexto)
    - Diagramas
    - DDD

# Pensar no app disconexo de qualquer meio externo
- Uma das coisas mais comuns quando começar um app é pensar em banco de dados
    - Pensar em como conseguiria fazer a aplicação independente de banco de dados
    - Banco é apenas uma ferramenta para persistir dados
        - Não deve ser responsável nem interferir em funcionalidade / regra de negócio
        - Se tive com banco offline e não tiver nem como testar app é chamado de **acoplamento entre camadas**

- Desafio:
    - Geralmente olhamos para tabela como entidade da aplicação
    - Não necessariamente uma entidade precisar ser uma table no banco
- Como uma entidade pode ser representada dentro da aplicação:
    - No POO:
        - Entidade seria uma classe (Cliente, Pedido, Fatura)

# Getters e setters
- Ao deixar privado e o method alterar o valor do atributo
    - Ao alterar o conteúdo, pode fazer validação, disparar algo, etc
- No js tem como criar de uma maneira mais fácil
```ts
class Notification {
  private content: string
  public setContent(content: string) {}
  // ao usar notification.setContent('asdfasdf')
}

// forma alterantiva de usar
export interface NotificationProps {
  content: string;
  category: string;
}

// ao usar notification.content = 'asdfasdf'
export class Notification {
  private props: NotificationProps;

  public set content(content: string) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }
}
```

# Value objects
- Conceito vem de dentro DDD
- Usado em atributos, propriedades da class como validação, formatação
- Separa em uma class um atributo especifico para conseguir fazer operações no atributo de forma isolada como em content.ts