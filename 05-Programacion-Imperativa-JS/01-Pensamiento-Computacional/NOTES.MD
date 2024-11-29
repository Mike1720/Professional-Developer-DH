# PENSAMIENTO COMPUTACIONAL

## ¿Qué es el pensamiento computacional?

Es un enfoque mental y estratégico que nos sirve para resolver problemas y tareas que resulten muy complejas de realizar. Pero siempre recordando que se basa en los principios fundamentales de la informática, lo cual implica la capacidad de:

* Descomponer problemas en partes más pequeñas
* Identificar cuestiones que se repitan.
* Abstraer información esencial.
* Diseñar un paso a paso detallado que nos lleve a soluciones efectivas.

En otras palabras se trata de un marco de pensamiento que se asemeja a la forma que las computadoras procesan información, lo que ayuda a las personas a resolver problemas de manera lógica y estructurada, independientemente de la tecnología o de los componentes especifícos que se involucran.

## Componentes del pensamiento computacional

Esta metodología se compone de cuatro componentes que son esenciales y que trabajan en conjunto para abordar cualquier desafio. Estos componentes son:

* Descomposición.
* Reconocimiento de patrones.
* Abstracción.
* Algoritmos

### Descomposición

Es un componente que implica dividir un problema complejo en tareas pequeñas, pero sobre todo, manejables.
Por ejemplo: Imagina crear un sitio web desde 0, en lugar de abordar todos los aspectos a la vez, la descomposición nos indica dividir en pasos más pequeños, como el diseño de la interfaz, por un lado, la programación backend, por el otro, la gestión de bases de datos, etc, y asi continuar dividiendo cada actividad en pequeños bloques para que resulten más simples. Esto no solo simplifica las tareas por realizar, sino que también nos permite abordar cada aspecto de manera más detallada y eficiente.

### Reconocimiento de patrones

Es la capacidad de identificar similitudes o regularidades en datos o situaciones, ya que haberlas observado en problemas anteriores, podemos aplicar soluciones conocidas a problemas nuevos.

### Abstracción

Consiste en simplificar una situación enfocándose sólo en los detalles que son relevantes y omitiendo cualquier información innecesaria.
Por ejemplo, al utilizar una calculadora, no necesitamos saber cómo funciona internamente, simplemente nos concentramos en los números y las operaciones que queremos realizar para obtener un resultado.

### Algoritmos

Son una serie de pasos precisos, detallados, secuenciales y finitos que se deben seguir para resolver un problema o realizar una tarea especifica.
El ejemplo más claro es una receta de cocina, las cuales tienen un paso a paso detallado y garantizan un resultado deseado.
En informatica, los algoritmos son esenciales y se utilizan frecuentemente para realizar cualquier tipo de tareas, ordenar datos, buscar información, realizar calculos, etc.

## Identificando Conceptos

***Cada elemento del pensamiento computacional puede estar involucrado en otro o viceversa; podemos ver patrones al abstraer o abstraer mientras descomponemos.***

> Los elementos del pensamiento computacional no son etapas secuenciales. Es decir, **no es uno necesariamente despues del otro.**

# Diagramas de Flujo

Un diagrama de flujo es una herramienta visual para representar **algoritmos** de una manera sencilla. La creación de estos gráficos ayudan a expresar y acomodar las ideas para el algoritmo pensado, además, nos ayudan a detallar el flujo de la información y, a modelar y modificar, en caso de ser necesario, nuestras soluciones planteadas.
Al momento de crearlos, debemos de tener en cuenta algunas caracteristicas clave, ya que en un diagrama de flujo utilizamos diferentes formas para representar elementos especificos. Dado que los algoritmos tienen un inicio y un fin (finitos), esto se representa siempre mediante un óvalo. Luego tenemos los rectangulos que son para las acciones concretas que se deban realizar. Los rombos se utilizan para representar la toma de decisiones o preguntas que se realizarán a la computadora, cuya respuesta solo pueden ser **si** o **no**, **verdadero** o **falso**.

# Paradigmas de Programación

## ¿Qué son los Paradigmas de Programación?

Son efoques o estilos de programación que determinan como escribimos y estructuramos nuestro código para resolver problemas.
Cada uno de los distintos paradigmas tiene sus propias reglas, principios y técnicas.

## Tipos de Paradigmas

Los 4 paradigmas principales son:

* Programación Imperativa
* Programación Declarativa
* Programación Orientada a Objetos
* Programación Reactiva

### Programación Imperativa

Este paradigma se centra en escribir explicitamente los pasos necesarios para lograr un resultado. Los programas imperativos se componen de instrucciones secuenciales que modifican el estado del programa. Un ejemplo simple de programación imperativa seria seguir una receta de cocina, la receta proporciona instrucciones secuenciales que debemos seguir para preparar un plato especifico, donde cada paso realizado modifica el estado actual de la cocina y nos acerca al resultado final.

Dentro de la programación imperativa destacan 3 bloques, que son:

* Programación Estructurada
* Programación Procedimental
* Programación Modular

#### Programación Estructurada

> Es un tipo de programación imperativa donde el flujo de control se define mediante bucles anidados, condicionales y subrutinas, en lugar de a través de GO TO.

Es un enfoque que se basa en una serie de estructuras lógicas simples. Estas estructuras son 3:

* Estructuras de secuencia: Se trata de ejecutar instrucciones una tras otra, siempre manteniendo un orden.
* Estructuras de selección: Se trata de tomar decisiones basadas en condiciones si se cumplen o no.
* Bucles: Se trata de repetir un conjunto de instrucciones que fueron detalladas una sola vez, la cantidad de veces que sea necesario, hasta que una condición deje de ser verdadera.

#### Programación Procedimental

> Consiste en un número muy bajo de expresiones repetidas englobadas todas en un procedimiento o función y llamarlo cada vez que tenga que ejecutarse.

Esta es una extensión de la programación estructurada, que se centra en organizar el código en distintos procedimientos, o mejor dicho, distintas funciones. Cada una de estas funciones es un conjunto de instrucciones que van a interactuar entre si para realizar una tarea especifica, y que se encuentran englobados bajo un único nombre.

Este enfoque lo que nos permite es repetir estos procedimientos la cantidad de veces que sean necesarios.

#### Programación Modular

> Consiste en dividir un programa en módulos o subprogramas con el fin de hacerlo más manejable y legible. Se trata de una evolución de la programación estructurada para resolver problemas de programación más complejos.

Lleva la idea de funciones un paso más alla al organizar el código en módulos o componentes que sean reutilizables. Cada uno de estos módulos contiene varias funciones que están relacionados entre si, y que se podrán utilizar en diferentes partes del programa.

### Programación Declarativa

Este paradigma **se centra en lo que se quiere lograr** en vez de como lograrlo.

#### Programación Lógica

> Un programa puede ser descrito definiendo ciertas relaciones entre conjuntos de objetos, a partir de las cuales otras pueden ser calculadas empleando deducción

Se basa en brindar declaraciones para describir hechos y reglas, y luego pedir al sistema que derive conclusiones lógicas a raíz de esas declaraciones previas.

#### Programación Funcional

> Se basa en la evaluación de expresiones, no en la ejecución de instrucciones.

Se basa en el concepto de funciones puras.

#### Programación Orientada a Objetos

> Se construyen modelos de objetos que representan elementos (objetos) del problema a resolver, que tienen características y funciones. Permite separar los diferentes componentes de un programa. Se acerca de alguna manera a cómo se expresaría las cosas en la vida real.

Este paradigma se basa en la creación de objetos que contienen datos y métodos que operan estos mismos datos.
Una analogía útil sería pensar en un auto como un objeto. El auto tiene distintas propiedades, como podrían ser la marca, el color, el modelo, etc. Y además, tiene métodos o acciones que operan a esas propiedades, por ejemplo encender motor, acelerar, frenar, entre otros. Dicho esto, podriamos usar estas declaraciones como un tipo de molde para crear diferentes tipos de autos, los cuales tendran diferentes marcas, diferente color, etc.

La ventaja que presenta este paradigma es que nos permite ahorrar tiempo y esfuerzo al poder utilizar el código existente, permite modelar conceptos del mundo real, lo que facilita la comprensión. Otra ventaja es el diseño del software, que permite proteger datos y limitar el acceso a ciertas partes del proyecto, y por si fuera poco, tambien brinda la posibilidad de volver al mismo, esto se traduce a mayor facilidad de entender y modificar el código.

### Programación Reactiva

> * Responsivos
> * Resilientes
> * Elásticos
> * Orientados a mensajes

Este paradigma se enfoca en construir sistemas que sean responsivos, resilientes, elásticos y orientados a mensajes.

Responsivo: Responde rápidamente a eventos o solicitudes.

Resiliente: Diseñado para recuperarse de errores y fallas de manera efectiva, manteniendo la disponibilidad e integridad de los datos.

Elástico: Pueden adaptarse automáticamente al aumentar o disminuir la demanda, optimizando el uso de los recursos.

Orientado a mensajes: Los componentes del sistema se comunican entre sí a través del intercambio de mensajes en lugar de llamadas directas, lo que permite la comunicación flexible y desacoplada.

## Comunicación

> Comunicación
>
> "Transmisión de señales de un emisor a un receptor mediante un código común (el lenguaje)."

Se refiere a una serie de señales que un emisor envia y un receptor recibe. Estas señales deben estar obligatoriamente en un lenguaje que ambos participantes comprendan, o de lo contrario, la comunicación no se logrará de forma exitosa.

El código son las instrucciones que lograrán la comunicación exitosa con la computadora. Estas instrucciones son un conjunto de palabras clave y de sintaxís especifica, que harán que la computadora entienda lo solicitado.

## Lenguaje y Ambigüedad

#### Lenguaje

Un lenguaje de programación es un conjunto de reglas y símbolos que permiten a los programadores escribir instrucciones para la computadora. Estas instrucciones, conocidas como código, se utilizan para crear programas y software que controlan el comportamiento de la computadora.

Cada lenguaje de programación tiene una sintaxís y semántica que determina cómo se deben escribir las instrucciones, y cómo se interpretarán o compilarán para poder ser comprendidas por la computadora.

Los lenguajes de programación se utilizan para una gran variedad de tareas desde el desarrollo de software, hasta la creación de sitios web y automatización de tareas.

#### Ambigüedad

La ambigüedad en programación se refiere a situaciones en las que el código escritó podría tener más de una interpretación o significado, lo que puede llevar a resultados inesperados o errores del programa. Esto puede surgir al no ser lo suficientemente precisos al escribir las instrucciones para la computadora, o también cuando hay multiples maneras de comprender o ejecutar una parte del código.

Para evitar errores, se hace la implementación de "Buenas Practicas", estas son un conjunto de pautas, normas y enfoques recomendados que garantizan que un código sea legible, mantenible, eficiente y libre de errores.
