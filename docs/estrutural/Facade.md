## Facade

É comum durante a nossa jornada de desenvolvimento encontrarmos códigos um pouco complexos para realizar algum 
tipo de operação. Para tentar contornar esse tipo de problema, temos o padrão **Facade**.

O **Facade** é um padrão de projeto estrutural, que tem o objetivo de reduzir a complexidade de uma operação
em um sistema, fornecendo um ponto para que o cliente possa consumir. O nome é bem descritivo, pois seu objetivo é criar uma
**fachada** da operação complexa (A tradução de **Facade** é **fachada**).

### Exemplo

Vamos imaginar um caso onde precisamos construir a funcionalidade de cadastrar um usuário na nossa aplicação, o processo de 
cadastrar consiste em: Validar se as informações de cadastro são validas, criar o usuário no banco, autentica-lo, enviar um email de 
boas-vindas e notificar a equipe de relacionamento com o cliente que tem um usuário novo na plataforma. Com essa 
ideia teriamos o seguinte código:

```typescript
class Validator {
  public isValid(data: {[key: string]: any}[]): boolean {
    console.log("Alguma validação");
    return true;
  }   
}

class User {
  public create(username: string, password: string, email: string): boolean {
    console.log("Algum mecanismo de cadastro");
    return true;
  }
}

class Auth {
  public login(username: string, password: string): boolean {
    console.log("Algum mecanismo de login");
    return true;
  }
}

class Mail {
  public to(email: string): Mail {
    return this;
  }
 
  public subject(subject): Mail {
    return this;
  }

  public send(): boolean {
    return true;
  }
}

class Notification {
  public to(target: string): Mail {
    return this;
  }
  
  public send(): boolean {
    return true;
  }
}

class SignUpFacade {
  constructor() {
    this.validator = new Validator();
    this.user = new User();
    this.auth = new Auth();
    this.mail = new Mail();
    this.notification = new Notification();
  }

  public signUp(username: string, password: string, email: string) {
    if (! this.validator.isValid({ username, password, email })) {
      throw new Error('Invalid');
    }
    
    this.user.create(username, password, email);
    this.auth.login(username, password);
    
    this.mail.to(email).subject('Welcome').send();
    
    this.notification.to('cs-team').send();
  }
}
```

Utilizar este padrão neste caso é apenas uma das várias maneiras de se resolver o nosso problema.

### Vantagens

- Isolar toda a complexidade de um sistema e criar uma interface mais simples para o cliente.

### Desvantagens

- Uma fachada pode se tornar uma god class se não usado corretamente.

### Refêrencias

- [https://refactoring.guru/pt-br/design-patterns/facade](https://refactoring.guru/pt-br/design-patterns/facade)
- [https://medium.com/@gbbigardi/arquitetura-e-desenvolvimento-de-software-parte-12-facade-2a5ed5209325](https://medium.com/@gbbigardi/arquitetura-e-desenvolvimento-de-software-parte-12-facade-2a5ed5209325)

---

[Retornar à página inicial](../../README.md)	[Retornar à página inicial](../../README.md)
