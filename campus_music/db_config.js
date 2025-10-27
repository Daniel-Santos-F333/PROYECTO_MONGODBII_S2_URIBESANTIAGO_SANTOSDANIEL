db_config

db.createCollection("estado", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["estado"],
            properties: {
                estado: { bsonType: "string", enum: ["basico", "intermedio", "avanzado"] }
            }
        }
    }
});

db.createCollection("nivel", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nivel"],
            properties: {
                nivel: { bsonType: "string", enum: ["activo", "inactivo"] }
            }
        }
    }
});

db.createCollection("estudiantes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "documento", "telefono", "idNivel"],
            properties: {
                nombre: { bsonType: "string", minLength: 3 },
                documento: { bsonType: "string", minLength: 5 },
                id_Nivel: {bsonType: "object_id"},
                idEstado: {bsonType: "object_id"},
                correo: { bsonType: "string", pattern: "^.+@.+\\..+$" },
                telefono: { bsonType: "string" },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.estudiantes.createIndex({ documento: 1 }, { unique: true });

db.estudiantes.insertMany([
    {
        nombre: "1239823128391",
        documento: TI109890839,
        nivel: sinNIvel,
        estado: "nininini",
        correo: juangmailcom,
        telefono: 3171234567,
        creadoEn: 27 / 10 / 25
    },
    {
        nombre: "Ana Gómez",
        documento: "TI102993201",
        nivel: "intermedio",
        estado: "activo",
        correo: "ana@gmail.com",
        telefono: "3171234567",
        creadoEn: new Date()
    },
    {
        nombre: "Luis Torres",
        documento: "CC213124102",
        nivel: "avanzado",
        estado: "inactivo",
        correo: "luis@gmail.com",
        telefono: "3171234567",
        creadoEn: new Date()
    }
]);

db.createCollection("profesores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "especialidad", "estado"],
            properties: {
                nombre: { bsonType: "string", minLength: 3 },
                especialidad: { enum: ["Piano", "Guitarra", "Violin", "Canto", "Teoria"] },
                experiencia: { bsonType: "int", minimum: 0 },
                estado: { enum: ["activo", "inactivo"] },
                correo: { bsonType: "string", pattern: "^.+@.+\\..+$" },
                telefono: { bsonType: "string" },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.profesores.insertMany([
    { nombre: "Ana Pérez", especialidad: "Piano", experiencia: 5, estado: "activo", correo: "ana@cm.com", telefono: "3000000000", creadoEn: new Date() },
    { nombre: "Carlos Ruiz", especialidad: "Guitarra", experiencia: 8, estado: "activo", correo: "carlos@cm.com", telefono: "3010000000", creadoEn: new Date() },
    { nombre: "Laura Gómez", especialidad: "Canto", experiencia: 4, estado: "inactivo", correo: "laura@cm.com", telefono: "3020000000", creadoEn: new Date() }
]);

db.createCollection("sedes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["ciudad", "direccion", "capacidad", "estado"],
            properties: {
                ciudad: { bsonType: "string", minLength: 2 },
                direccion: { bsonType: "string", minLength: 5 },
                capacidad: { bsonType: "int", minimum: 1 },
                estado: { enum: ["activa", "inactiva"] },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.sedes.insertMany([
    { ciudad: "Bogotá", direccion: "Cra 1 # 23-45", capacidad: 300, estado: "activa", creadoEn: new Date() },
    { ciudad: "Medellín", direccion: "Av El Poblado 45-67", capacidad: 200, estado: "activa", creadoEn: new Date() },
    { ciudad: "Cali", direccion: "Calle 5 # 67-89", capacidad: 180, estado: "activa", creadoEn: new Date() }
]);

const sede = db.sedes.findOne();
const profesor = db.profesores.findOne();

db.createCollection("cursos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["instrumento", "nivel", "duracionSemanas", "cupos", "costo", "sedeId", "profesorId", "estado"],
            properties: {
                instrumento: { enum: ["Piano", "Guitarra", "Violin", "Canto", "Teoria"] },
                nivel: { enum: ["basico", "intermedio", "avanzado"] },
                duracionSemanas: { bsonType: "int", minimum: 1 },
                cupos: { bsonType: "int", minimum: 1 },
                costo: { bsonType: "double", minimum: 0 },
                sedeId: { bsonType: "objectId" },
                profesorId: { bsonType: "objectId" },
                estado: { enum: ["programado", "en_ejecucion", "finalizado"] },
                creadoEn: { bsonType: "date" }
            }
        }
    }
});

db.cursos.insertMany([
    { instrumento: "Piano", nivel: "basico", duracionSemanas: 8, cupos: 12, costo: 400000, sedeId: sede._id, profesorId: profesor._id, estado: "en_ejecucion", creadoEn: new Date() },
    { instrumento: "Guitarra", nivel: "intermedio", duracionSemanas: 10, cupos: 10, costo: 450000, sedeId: sede._id, profesorId: profesor._id, estado: "programado", creadoEn: new Date() },
    { instrumento: "Canto", nivel: "avanzado", duracionSemanas: 12, cupos: 8, costo: 500000, sedeId: sede._id, profesorId: profesor._id, estado: "programado", creadoEn: new Date() }
]);

const estudiante = db.estudiantes.findOne();
const curso = db.cursos.findOne();

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

const instrumento = db.instrumentos.findOne();

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
