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
