//Inserciones de sedes
db.sedes.insertMany([
  {
    ciudad: "Bogotá",
    direccion: "Cra 1 # 23-45",
    capacidad: 300,
    estadoId: 1,
    creadoEn: new Date(),
  },
  {
    ciudad: "Medellín",
    direccion: "Av El Poblado 45-67",
    capacidad: 200,
    estadoId: 1,
    creadoEn: new Date(),
  },
  {
    ciudad: "Cali",
    direccion: "Calle 5 # 67-89",
    capacidad: 180,
    estadoId: 1,
    creadoEn: new Date(),
  },d
]);

//Inserciones de cursos
db.cursos.insertMany([
  {
    instrumentoTipoId: 1,
    nivelId: 1,
    duracionSemanas: 8,
    cupos: 12,
    costo: 400000,
    sedeId: ObjectId(),
    profesorId: ObjectId(),
    cursoEstadoId: 2,
    creadoEn: new Date(),
  },
  {
    instrumentoTipoId: 2,
    nivelId: 2,
    duracionSemanas: 10,
    cupos: 10,
    costo: 450000,
    sedeId: ObjectId(),
    profesorId: ObjectId(),
    cursoEstadoId: 1,
    creadoEn: new Date(),
  },
  {
    instrumentoTipoId: 3,
    nivelId: 3,
    duracionSemanas: 12,
    cupos: 8,
    costo: 500000,
    sedeId: ObjectId(),
    profesorId: ObjectId(),
    cursoEstadoId: 1,
    creadoEn: new Date(),
  },
  {
    instrumentoTipoId: 4,
    nivelId: 1,
    duracionSemanas: 6,
    cupos: 15,
    costo: 350000,
    sedeId: ObjectId(),
    profesorId: ObjectId(),
    cursoEstadoId: 2,
    creadoEn: new Date(),
  },
  {
    instrumentoTipoId: 5,
    nivelId: 2,
    duracionSemanas: 14,
    cupos: 6,
    costo: 550000,
    sedeId: ObjectId(),
    profesorId: ObjectId(),
    cursoEstadoId: 1,
    creadoEn: new Date(),
  },
]);
//Inserciones de cursos
db.profesores.insertMany([
    { nombre: "Ana Pérez",   especialidadId: 1, experiencia: 5,  estadoId: 1, correo: "ana@cm.com",    telefono: "3000000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Carlos Ruiz", especialidadId: 2, experiencia: 8,  estadoId: 1, correo: "carlos@cm.com", telefono: "3010000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Laura Gómez", especialidadId: 4, experiencia: 4,  estadoId: 2, correo: "laura@cm.com",  telefono: "3020000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Miguel Torres",   especialidadId: 3, experiencia: 10, estadoId: 1, correo: "miguel@cm.com",   telefono: "3030000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Sofía Hernández", especialidadId: 2, experiencia: 6,  estadoId: 1, correo: "sofia@cm.com",    telefono: "3040000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Andrés Castro",   especialidadId: 5, experiencia: 7,  estadoId: 1, correo: "andres@cm.com",   telefono: "3050000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Valentina Mora",  especialidadId: 1, experiencia: 3,  estadoId: 2, correo: "valentina@cm.com",telefono: "3060000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Juan López",      especialidadId: 3, experiencia: 9,  estadoId: 1, correo: "juan@cm.com",     telefono: "3070000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "María Díaz",      especialidadId: 4, experiencia: 2,  estadoId: 2, correo: "maria@cm.com",    telefono: "3080000000", cursosAsignados: [], creadoEn: new Date() },
    { nombre: "Diego Fernández", especialidadId: 5, experiencia: 11, estadoId: 1, correo: "diego@cm.com",    telefono: "3090000000", cursosAsignados: [], creadoEn: new Date() }
  ]);
  