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

db.createCollection("estado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: { bsonType: "int" },
        nombre: { bsonType: "string", enum: ["activo", "inactivo"] }
      }
    }
  }
});

db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "documento", "telefono", "nivelId", "estadoId"],
      properties: {
        nombre: { bsonType: "string", minLength: 3 },
        documento: { bsonType: "string", minLength: 5 },
        nivelId: { bsonType: "int" },
        estadoId: { bsonType: "int" },
        correo: { bsonType: "string", pattern: "^.+@.+\\..+$" },
        telefono: { bsonType: "string" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

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
        cursosAsignados: { bsonType: "array", items: { bsonType: "objectId" } },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

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

db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["instrumentoTipoId", "nivelId", "duracionSemanas", "cupos", "costo", "sedeId", "profesorId", "cursoEstadoId", "creadoEn"],
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

db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["estudianteId", "cursoId", "costo", "fechaInscripcion", "inscripcionEstadoId", "creadoEn"],
      properties: {
        estudianteId: { bsonType: "objectId" },
        cursoId: { bsonType: "objectId" },
        costo: { bsonType: "double", minimum: 0 },
        fechaInscripcion: { bsonType: "date" },
        inscripcionEstadoId: { bsonType: "int" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["tipoId", "marca", "estadoId", "sedeId", "codigoInventario", "creadoEn"],
      properties: {
        tipoId: { bsonType: "int" },
        marca: { bsonType: "string", minLength: 1 },
        estadoId: { bsonType: "int" },
        sedeId: { bsonType: "objectId" },
        codigoInventario: { bsonType: "string", minLength: 1 },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("reservas_instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["estudianteId", "instrumentoId", "sedeId", "fechaReserva", "reservaEstadoId", "creadoEn"],
      properties: {
        estudianteId: { bsonType: "objectId" },
        instrumentoId: { bsonType: "objectId" },
        sedeId: { bsonType: "objectId" },
        fechaReserva: { bsonType: "date" },
        reservaEstadoId: { bsonType: "int" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("usuarios_sistema", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "rolId", "estadoId", "creadoEn"],
      properties: {
        nombre: { bsonType: "string", minLength: 3 },
        rolId: { bsonType: "int" },
        estadoId: { bsonType: "int" },
        creadoEn: { bsonType: "date" }
      }
    }
  }
});
