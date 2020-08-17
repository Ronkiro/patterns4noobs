## Observer

> Também chamado de Publisher/Subscriber, Event Generator e Dependants

Você já sentiu a necessidade de observar como um objeto em sua aplicação se comporta, para em um determinado momento realizar alguma outra tarefa específica?

Basicamente, quando temos a necessidade de rastrear mudanças de eventos em um objeto (Ou seja, observar este objeto) para a tomada de alguma ação, temos a situação de Observer/Observable.

Dada esta descrição, notamos que saber o padrão **Observer** pode ser considerado algo essencial para desenvolvedores front-end.

### E o que significa Observer/Observable?

- Observer: Representa o objeto que quer observar.
- Observable: Representa o objeto que irá ser observado.

> Em algumas literaturas, Observable também é referido como Subject, pois representa o sujeito à ser observado.

### Vantagens no uso do padrão Observer

- Temos um acoplamento baixo entre o Observer e o Observable (Atendendo metodologias como SOLID).
- Conseguimos aplicar o princípio da Substituição de Liskov.
- Facilita a criação de códigos para gerenciamento de estados (Facilitando, por exemplo, criação de fluxos únicos de informação).
- Observers podem ser removidos/adicionados com facilidade

### Desvantagens no uso do padrão Observer

- Se não utilizado corretamente, pode agregar complexidade e reduzir performance.

---

> Este artigo é um esboço, e poderá mudar futuramente. [Contribua na criação dele!](../../CONTRIB.md)

[Retornar à página inicial](../../README.md)
