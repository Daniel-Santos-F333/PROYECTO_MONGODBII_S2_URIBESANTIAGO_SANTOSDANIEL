db_config

db.createCollection("nivel", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "nombre"],
            properties: {
                _id: { bsonType: "int" },
                nombre: { bsonType: "string", enum: ["basico", "intermedio", "avanzado"] }
            }
        }
    }
});
db.nivel.insertMany([
    { _id: 1, nombre: "basico" },
    { _id: 2, nombre: "intermedio" },
    { _id: 3, nombre: "avanzado" }
]);

db.createCollection("estado", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["estado"],
            properties: {
                nivel: { bsonType: "string", enum: ["activo", "inactivo"] }
            }
        }
    }
});

db.estado.insertMany([
    { _id: 1, nombre: "activo" },
    { _id: 2, nombre: "inactivo" }
]);


db.createCollection("estudiantes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "documento", "telefono", "idNivel"],
            properties: {
                nombre: { bsonType: "string", minLength: 3 },
                documento: { bsonType: "string", minLength: 5 },
                id_Nivel: { bsonType: "object_id" },
                idEstado: { bsonType: "object_id" },
                correo: { bsonType: "string", pattern: "^.+@.+\\..+$" },
                telefono: { bsonType: "string" },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.estudiantes.createIndex({ documento: 1 }, { unique: true });

db.estudiantes.insertOne({
    nombre: "1239823128391",
    documento: "TI109890839",
    nivelId: 99,             // Este nivel no existe por lo que debe dar error
    estadoId: "activo",      // Deber ser un entero, debe dar error
    correo: "juangmailcom",  // No cumple con la sintaxis, debe dar error
    telefono: "3171234567",
    creadoEn: new Date("2025-10-27")
});

db.estudiantes.insertMany([
    { nombre: "Juan Pérez", documento: "TI109890839", nivelId: 1, estadoId: 1, correo: "juan@gmail.com", telefono: "3171234567", contacto: { ciudad: "Bogotá", direccion: "Cra 17 # 55-64" }, creadoEn: new Date() },
    { nombre: "Ana Gómez", documento: "TI102993201", nivelId: 2, estadoId: 1, correo: "ana@gmail.com", telefono: "3171234568", contacto: { ciudad: "Bogotá", direccion: "Av El Poblado 45-67" }, creadoEn: new Date() },
    { nombre: "Luis Torres", documento: "CC213124102", nivelId: 3, estadoId: 2, correo: "luis@gmail.com", telefono: "3171234569", contacto: { ciudad: "Cali", direccion: "Calle 17e # 67-89" }, creadoEn: new Date() }
]);



db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "especialidadId", "experiencia", "estadoId", "correo", "creadoEn"],
      properties: {
        nombre: { bsonType: "string", minLength: 3 },
        especialidadId: { bsonType: "int" },
        experiencia: { bsonType: "int", minimum: 0 },
        estadoId: { bsonType: "int" },
        correo: { bsonType: "string", pattern: "^.+@.+\\..+$" },
        telefono: { bsonType: "string", pattern: "^[0-9]{7,15}$" },
        cursosAsignados: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.profesores.createIndex({ correo: 1 }, { unique: true });                  
db.profesores.createIndex({ especialidadId: 1, estadoId: 1 });               
db.profesores.createIndex({ nombre: "text" });                               


//Comprobar que el validator si valide//
db.profesores.insertOne({
    nombre: "E",                  
    especialidadId: 67,
    experiencia: ninguna,                
    estadoId: "activo",             
    correo: "anagmail.com",     
    telefono: "300",                
    creadoEn: new Date()
  });



db.profesores.insertMany([
  { nombre: "Ana Pérez",   especialidadId: 1, experiencia: 5, estadoId: 1, correo: "ana@cm.com",   telefono: "3000000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Carlos Ruiz", especialidadId: 2, experiencia: 8, estadoId: 1, correo: "carlos@cm.com", telefono: "3010000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Laura Gómez", especialidadId: 4, experiencia: 4, estadoId: 2, correo: "laura@cm.com",  telefono: "3020000000", cursosAsignados: [], creadoEn: new Date() }
]);

db.createCollection("sedes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ciudad", "direccion", "capacidad", "estadoId", "creadoEn"],
      properties: {
        ciudad: { bsonType: "string", minLength: 2 },
        direccion: { bsonType: "string", minLength: 5 },
        capacidad: { bsonType: "int", minimum: 1 },
        estadoId: { bsonType: "int" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.sedes.createIndex({ ciudad: 1, estadoId: 1 });
db.sedes.createIndex({ ciudad: 1, direccion: 1 }, { unique: true });

// Dato erróneo (debe fallar) //
db.sedes.insertOne({
  ciudad: "B",
  direccion: "C 1",
  capacidad: 0,
  estadoId: "activa",
  creadoEn: new Date()
});


db.sedes.insertMany([
  { ciudad: "Bogotá", direccion: "Cra 1 # 23-45", capacidad: 300, estadoId: 1, creadoEn: new Date() },
  { ciudad: "Medellín", direccion: "Av El Poblado 45-67", capacidad: 200, estadoId: 1, creadoEn: new Date() },
  { ciudad: "Cali", direccion: "Calle 5 # 67-89", capacidad: 180, estadoId: 1, creadoEn: new Date() }
]);


db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "instrumentoTipoId",
        "nivelId",
        "duracionSemanas",
        "cupos",
        "costo",
        "sedeId",
        "profesorId",
        "cursoEstadoId",
        "creadoEn"
      ],
      properties: {
        instrumentoTipoId: { bsonType: "int" },
        nivelId: { bsonType: "int" },
        duracionSemanas: { bsonType: "int", minimum: 1 },
        cupos: { bsonType: "int", minimum: 1 },
        costo: { bsonType: "double", minimum: 0 },
        sedeId: { bsonType: "objectId" },
        profesorId: { bsonType: "objectId" },
        cursoEstadoId: { bsonType: "int" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.cursos.createIndex({ sedeId: 1, cursoEstadoId: 1 });
db.cursos.createIndex({ profesorId: 1, cursoEstadoId: 1 });
db.cursos.createIndex({ nivelId: 1, instrumentoTipoId: 1 });

/* Dato erróneo */
db.cursos.insertOne({
  instrumentoTipoId: "Piano",
  nivelId: 99,
  duracionSemanas: 0,
  cupos: 10,
  costo: -1,
  sedeId: "objectid",
  profesorId: "objectid",
  cursoEstadoId: 9,
  creadoEn: new Date()
});


db.cursos.insertMany([
  { instrumentoTipoId: 1, nivelId: 1, duracionSemanas: 8,  cupos: 12, costo: 400000, sedeId: ObjectId(), profesorId: ObjectId(), cursoEstadoId: 2, creadoEn: new Date() },
  { instrumentoTipoId: 2, nivelId: 2, duracionSemanas: 10, cupos: 10, costo: 450000, sedeId: ObjectId(), profesorId: ObjectId(), cursoEstadoId: 1, creadoEn: new Date() },
  { instrumentoTipoId: 3, nivelId: 3, duracionSemanas: 12, cupos: 8,  costo: 500000, sedeId: ObjectId(), profesorId: ObjectId(), cursoEstadoId: 1, creadoEn: new Date() }
]);



db.createCollection("inscripciones", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["estudianteId", "cursoId", "costo", "fechaInscripcion", "estado"],
            properties: {
                estudianteId: { bsonType: "objectId" },
                cursoId: { bsonType: "objectId" },
                costo: { bsonType: "double", minimum: 0 },
                fechaInscripcion: { bsonType: "date" },
                estado: { enum: ["activa", "retirada", "finalizada"] },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.inscripciones.insertMany([
    { estudianteId: estudiante._id, cursoId: curso._id, costo: 400000, fechaInscripcion: new Date(), estado: "activa", creadoEn: new Date() }
]);

db.createCollection("instrumentos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["tipo", "marca", "estado", "sedeId"],
            properties: {
                tipo: { enum: ["Piano", "Guitarra", "Violin", "Bajo", "Ukelele", "Teclado"] },
                marca: { bsonType: "string" },
                estado: { enum: ["disponible", "mantenimiento", "prestado", "baja"] },
                sedeId: { bsonType: "objectId" },
                codigoInventario: { bsonType: "string" },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.instrumentos.insertMany([
    { tipo: "Piano", marca: "Yamaha", estado: "disponible", sedeId: sede._id, codigoInventario: "INV-001", creadoEn: new Date() },
    { tipo: "Guitarra", marca: "Fender", estado: "disponible", sedeId: sede._id, codigoInventario: "INV-002", creadoEn: new Date() },
    { tipo: "Violin", marca: "Strad", estado: "mantenimiento", sedeId: sede._id, codigoInventario: "INV-003", creadoEn: new Date() }
]);



db.createCollection("reservas_instrumentos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["estudianteId", "instrumentoId", "sedeId", "fechaReserva", "estado"],
            properties: {
                estudianteId: { bsonType: "objectId" },
                instrumentoId: { bsonType: "objectId" },
                sedeId: { bsonType: "objectId" },
                fechaReserva: { bsonType: "date" },
                estado: { enum: ["activa", "devuelta", "cancelada"] },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.reservas_instrumentos.insertMany([
    { estudianteId: estudiante._id, instrumentoId: instrumento._id, sedeId: sede._id, fechaReserva: new Date(), estado: "activa", creadoEn: new Date() },
    { estudianteId: estudiante._id, instrumentoId: instrumento._id, sedeId: sede._id, fechaReserva: new Date(), estado: "devuelta", creadoEn: new Date() }
]);

db.createCollection("usuarios_sistema", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "rol", "estado"],
            properties: {
                nombre: { bsonType: "string" },
                rol: { enum: ["administrador", "empleado", "estudiante"] },
                estado: { enum: ["activo", "inactivo"] },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.usuarios_sistema.insertMany([
    { nombre: "Administrador General", rol: "administrador", estado: "activo", creadoEn: new Date() },
    { nombre: "Empleado Bogotá", rol: "empleado", estado: "activo", creadoEn: new Date() },
    { nombre: "Estudiante Juan", rol: "estudiante", estado: "activo", creadoEn: new Date() }
]);
