#### Abstract Factory Pattern

O design pattern `Abstract Factory` fornece uma forma de agrupar várias factories que possuem o mesmo contexto, 
sem a necessidade de especificar suas classes concretas. Com o intuito de exemplificar a implementação deste 
padrão, foi criado esse esboço.

Veja como fica a disposição das responsabilidades:

* Client
    * **IComputer**
        * DellComputer
            * DellKeyboard
            * DellProcessor
            * DellScreen
    * **IComputerFactory**
        * DellFactory

Com o exemplo fornecido é possível criar cenários em que esse padrão seria facilmente implementado.

Fonte: [Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Abstract_factory_pattern).

[Retornar à página inicial](../../../README.md)
