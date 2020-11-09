## Singleton

Vamos imaginar que tem um recurso em sua aplicação (uma classe que faz algo) que precisa ser utilizado em vários
lugares da sua aplicação, porém os lugares que vão acessar este recurso, precisam acessar a mesma instância,
ou seja, todos tem que ter acesso a mesma classe.

Dado este problema, temos um padrão de projeto que visa resolvê-lo. O **Singleton** é um padrão de projeto
criacional, que permite que uma classe tenha apenas uma instância e garante um ponto de acesso global a esta instância.

**Obs:** É importante dizer que o padrão **Singleton** é considerado um anti-pattern, então caso você precise de uma solução
parecida, é aconselhável que você procure utilizar um IoC.

### Exemplo

```typescript
class Singleton {
  private static instance: Singleton;

  /**
   * Singleton constructor.
   */
  public __construct() {
  }
  
  /**
   * Get the singleton instance.
   *
   * @return {Singleton}
   */
  public static getInstance(): Singleton {
    if (! Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
```

Tendo esta classe, qualquer outro lugar que chame o método `.getInstance()` da classe, terá acesso a mesma instância:

```typescript
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstanec();

console.log(singleton1 === singleton2); //true
```

### Vantagens

- Ganha um ponto de acesso global ao recurso;
- O objeto é iniciado apenas uma vez.

### Desvantagens

- Viola o princípio de responsabilidade única (_Single Responsibility Principple_) do SOLID;
- Pode ser difícil criar testes unitários em componentes que utilizam o recurso singleton.

### Referências:

- [https://refactoring.guru/pt-br/design-patterns/singleton](https://refactoring.guru/pt-br/design-patterns/singleton)
- [https://github.com/domnikl/DesignPatternsPHP/tree/main/Creational/Singleton](https://github.com/domnikl/DesignPatternsPHP/tree/main/Creational/Singleton)
- [https://pt.wikipedia.org/wiki/Singleton](https://pt.wikipedia.org/wiki/Singleton)

---

[Retornar à página inicial](../../README.md)
