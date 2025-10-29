<div align="center"">

### CAMPUS MUSIC 

</div>

<div align="center">
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### SANTIAGO URIBE DUARTE
<br>

### DANIEL SANTOS FAJARDO
<br>
<br>
<br>

### S2

<br>
<br>

### PEDRO FELIPE GOMEZ BONILLA

<br>
<br>
<br>
<br>
<br>

### CAMPUSLANDS
### CAJASAN
### RUTA NODE.js
### BUCARAMANGA
### 2025
<br>
<br>
<br><br>
<br>
<br>
</div>

## Tabla de Contenido
- [Introducción](#introduccion) ............................................................................................................................. 2
- [Caso de Estudio](#casodeestudio)........................................................................................................................ 3

- [Planificación](#planificacion)............................................................................................................................... 4
    - [Modelo Conceptual](#modeloconceptual)................................................................................................... 4.1
    - [Modelo Lógico](#modelológico)............................................................................................................. 4.2

    - [Modelo Físico](#modelofisico)............................................................................................................... 4.3

<br>
<br>
<br>
<br>
<br>

<div id="introduccion" align="center">
<h1>Introducción</h1>
</div>
<br>
<br>
En este documento se presenta el desarrollo de una base de datos como solución a la situación actual de la empresa Campus Music, la cual busca mejorar su gestión de información y facilitar los procesos relacionados con su trabajo El objetivo principal es implementar una base de datos que permita un acceso más rápido, estructurado y eficiente a los datos evitando la redundancia y duplicacion de información y los errores comunes derivados del manejo manual mediante las hojas de cálculo.

Esta propuesta surge ante la necesidad de actualizar y modernizar el sistema de gestion de datos que actualmente utiliza la empresa, pasando de un manejo disperso de datos a una solución unificada y automatica. Con el uso de MongoDB, se busca aprovechar su flexibilidad y capacidad para mnejar grandes volúmenes de información en estructuras no relacionales, lo cual se aprovechara ya que sirve para un entorno donde los datos pueden variar y relacionarse de distintas formas.

A lo largo del documento se describe el proceso seguido para el desarrollo del proyecto, comenzando con el análisis del caso e identificar las principales problemáticas. Siguiendo con la explicación del diseño del modelo conceptual y lógico, que se acompaña de diagramas para representar las entidades y relaciones del sistema. Finalmente, se expone la implementación en el gestor de bases de datos MongoDB, que corresponde al modelo físico, junto con las decisiones técnicas aplicadas para garantizar la integridad, consistencia y escalabilidad de los datos.

Y asi el proyecto no solo busca ofrecer una solución funcional a los problemas actuales de Campus Music, sino también servir como una práctica de lo visto en clases.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div id="casodeestudio" align="center">
<h1>Caso de Estudio</h1>
</div>
<br>
<br>

Se presenta el caso de Campus Music, una empresa encargada de administrar varias escuelas de música en diferentes ciudades del país. Sin embargo, sus procesos de gestión de datos, como el registro de estudiantes, docentes, cursos e inscripciones, se realizan de forma manual mediante hojas de cálculo, lo que ha generado duplicación de información, errores en los cálculos y errores en la gestión administrativa y financiera.

Ante esta situación, se propuso el desarrollo de una base de datos implementada en MongoDB como alternativa, más eficiente y organizada. Esta solución busca centralizar toda la información en un solo sistema, permitiendo un manejo más rápido, confiable y estructurado de los datos, además de reducir los errores provocados por el manejo manual.

Con la implementación de esta propuesta, Campus Music mejorará la integridad de sus registros, optimizará el acceso a la información y mejorará la gestión general de sus operaciones internas.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div id="planificacion" align="center">
<h1>Planificación</h1>
</div>
<br>

<div id="modeloconceptual">
<h2>Modelo Conceptual</h2>
</div>

El modelo conceptual representa de forma general cómo se relacionan los distintos elementos que hacen parte del sistema de Campus Music. Su funcion es mostrar la estructura lógica de la información sin entrar todavía en muchos detalles, como tipos de datos o validaciones. Ayuda a entender qué entidades fueron determinadas, cómo se conectan entre ellas y qué papel cumple cada una dentro del sistema.

<div>
<h3>Grafica</h3>
</div>

```mermaid
classDiagram
    direction LR

    class Sede {
        Ciudad
        Dirección
    }
    class Curso {
        Instrumento
        Nivel
        Horario
        Costo
    }
    class Profesor {
        Especialidad
        Experiencia
    }
    class Estudiante {
        Documento
        Nivel Musical
    }
    class Inscripción {
        Fecha de Inscripción
        Costo pagado
    }
    class Instrumento {
        Tipo
    }
    class Reserva {
        Fecha de Reserva
    }
    class Usuario {
        Rol (Admin, Profesor, Estudiante)
    }

    %% Relaciones Conceptuales (Basadas en el negocio)

    Sede "1" -- "N" Curso : "Ofrece"
    Profesor "1" -- "N" Curso : "Asigna"

    Estudiante "N" -- "N" Curso : "Se inscribe en"
    Estudiante "1" -- "N" Inscripción : "Realiza"
    Curso "1" -- "N" Inscripción : "Es el objeto de"
    Inscripción "N" -- "1" Sede : "Ocurre en"
    Inscripción "N" -- "1" Profesor : "Asociada a"

    Estudiante "1" -- "N" Reserva : "Realiza"
    Instrumento "1" -- "N" Reserva : "Es el objeto de"

    Usuario "1" -- "1" Estudiante : "Gestiona acceso de"
    Usuario "1" -- "1" Profesor : "Gestiona acceso de 43"
```
En este caso, el modelo está compuesto por varias entidades principales:

- **Usuario:** controla el acceso al sistema y define el rol de cada persona (administrador, profesor o estudiante).

- **Sede**: representa las escuelas de música ubicadas en diferentes ciudades, con su respectiva dirección.

- **Profesor:** contiene los datos de los docentes, junto con su especialidad y experiencia.

- **Estudiante:** almacena información personal de los alumnos, como documento y nivel musical.

- **Curso:** indica los cursos que ofrece cada sede, detallando el instrumento, nivel, horario y costo.

- **Inscripción:** relaciona a los estudiantes con los cursos y profesores, guardando la fecha y el costo pagado.

- **Instrumento:** muestra los tipos de instrumentos disponibles para préstamo o uso dentro de las sedes.

- **Reserva:** conecta a los estudiantes con los instrumentos que utilizan, registrando la fecha de la reserva.

A su vez estas entidades están relacionadas entre ellas de manera que muestran cómo interactúan dentro del sistema. 

En cuanto a la normalización se refiere, el modelo cumple con los principios hasta la tercera forma normal, ya que todos los atributos son atómicos y dependen completamente de su clave principal y no existen dependencias entre atributos que no sean clave. Esto permite evitar redundancias y asegurar que la información esté organizada de manera lógica y coherente.

<br>
<br>
<br>
<br>

<div id="modelológico">
<h2>Modelo Lógico</h2>
</div>
<br>
<br>

El modelo lógico es una manera más técnica de representar lala estructura del sistema y cómo la información será organizada dentro de la base de datos. Diferente del modelo conceptual, el lógico ya define los atributos, tipos de datos y relaciones entre las colecciones, lo que lo hace más cercano al diseño real que se implementará.

En el caso de este proyecto, el modelo lógico sirve para mostrar cómo se conectan las diferentes colecciones de MongoDB como Usuarios, Profesores, Estudiantes, Sedes, Cursos, Inscripciones, Instrumentos y Reservas de Instrumentos.
Cada una tiene sus propios campos y referencias, mostrando qué datos se guardan, qué claves se relacionan entre sí y cómo se mantiene la integridad entre los registros.

Por ejemplo, los estudiantes están vinculados a un usuario para su acceso, las inscripciones conectan estudiantes con cursos y profesores, y las reservas relacionan instrumentos con los alumnos que los utilizan.

Este modelo nos permite visualizar de forma clara cómo fluirá la información y comprobar que el diseño que hemos planteado cumple con las reglas de consistencia y normalización necesarias.

<br>
<div>
<h3>Grafica</h3>
</div>

<br>
```mermaid

    erDiagram 
        SEDE ||--o{ CURSO : "tiene"
        PROFESOR ||--o{ CURSO : "asigna"
        ESTUDIANTE ||--o{ INSCRIPCION : "realiza"
        CURSO ||--o{ INSCRIPCION : "posee"
        ESTUDIANTE ||--o{ RESERVA_INSTRUMENTO : "hace"
        INSTRUMENTO ||--o{ RESERVA_INSTRUMENTO : "incluye"
        USUARIO ||--o| ESTUDIANTE : "perfil_estudiante"
        USUARIO ||--o| PROFESOR : "perfil_profesor"

        SEDE {
            ObjectId _id PK
            string nombre
            string ciudad
            string direccion
            int capacidad
        }

        PROFESOR {
            ObjectId _id PK
            string nombre
            string especialidad
            string experiencia
        }

        CURSO {
            ObjectId _id PK
            string instrumento
            int duracion
            int cupos_totales
            int cupos_disponibles
            double costo
            string nivel "Principiante, Básico, Avanzado"
            string estado "Activo, Inactivo, Finalizado"
            ObjectId profesor_id FK "Referencia a Profesor"
            ObjectId sede_id FK "Referencia a Sede"
        }

        ESTUDIANTE {
            ObjectId _id PK
            string nombre
            string documento UK
            string nivel_musical
            object contacto "teléfono, email"
            ObjectId usuario_id FK "Referencia a Usuario"
        }

        INSCRIPCION {
            ObjectId _id PK
            date fecha_inscripcion
            double costo_en_inscripcion
            ObjectId estudiante_id FK "Referencia a Estudiante"
            ObjectId curso_id FK "Referencia a Curso"
            ObjectId sede_id FK "Referencia a Sede"
            object datos_curso_snapshot "Instrumento, Nivel, Profesor embebidos"
        }

        INSTRUMENTO {
            ObjectId _id PK
            string tipo
            string estado "Disponible, Prestado, Mantenimiento"
        }

        RESERVA_INSTRUMENTO {
            ObjectId _id PK
            date fecha_reserva
            date fecha_devolucion
            ObjectId estudiante_id FK "Referencia a Estudiante"
            ObjectId instrumento_id FK "Referencia a Instrumento"
        }

        USUARIO {
            ObjectId _id PK
            string email UK
            string password
            string rol "Administrador, Empleado_sede, Estudiante, Profesor"
        }

