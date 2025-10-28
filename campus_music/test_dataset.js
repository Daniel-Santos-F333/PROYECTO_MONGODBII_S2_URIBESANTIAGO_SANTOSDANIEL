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
  }, d
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
  { nombre: "Ana Pérez", especialidadId: 1, experiencia: 5, estadoId: 1, correo: "ana@cm.com", telefono: "3000000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Carlos Ruiz", especialidadId: 2, experiencia: 8, estadoId: 1, correo: "carlos@cm.com", telefono: "3010000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Laura Gómez", especialidadId: 4, experiencia: 4, estadoId: 2, correo: "laura@cm.com", telefono: "3020000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Miguel Torres", especialidadId: 3, experiencia: 10, estadoId: 1, correo: "miguel@cm.com", telefono: "3030000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Sofía Hernández", especialidadId: 2, experiencia: 6, estadoId: 1, correo: "sofia@cm.com", telefono: "3040000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Andrés Castro", especialidadId: 5, experiencia: 7, estadoId: 1, correo: "andres@cm.com", telefono: "3050000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Valentina Mora", especialidadId: 1, experiencia: 3, estadoId: 2, correo: "valentina@cm.com", telefono: "3060000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Juan López", especialidadId: 3, experiencia: 9, estadoId: 1, correo: "juan@cm.com", telefono: "3070000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "María Díaz", especialidadId: 4, experiencia: 2, estadoId: 2, correo: "maria@cm.com", telefono: "3080000000", cursosAsignados: [], creadoEn: new Date() },
  { nombre: "Diego Fernández", especialidadId: 5, experiencia: 11, estadoId: 1, correo: "diego@cm.com", telefono: "3090000000", cursosAsignados: [], creadoEn: new Date() }
]);

db.estudiantes.insertMany([
  { nombre: "Est. 01", documento: "DOC1001", nivelId: 1, estadoId: 1, correo: "e01@cm.com", telefono: "3100000001", creadoEn: new Date() },
  { nombre: "Est. 02", documento: "DOC1002", nivelId: 2, estadoId: 1, correo: "e02@cm.com", telefono: "3100000002", creadoEn: new Date() },
  { nombre: "Est. 03", documento: "DOC1003", nivelId: 3, estadoId: 1, correo: "e03@cm.com", telefono: "3100000003", creadoEn: new Date() },
  { nombre: "Est. 04", documento: "DOC1004", nivelId: 1, estadoId: 1, correo: "e04@cm.com", telefono: "3100000004", creadoEn: new Date() },
  { nombre: "Est. 05", documento: "DOC1005", nivelId: 2, estadoId: 1, correo: "e05@cm.com", telefono: "3100000005", creadoEn: new Date() },
  { nombre: "Est. 06", documento: "DOC1006", nivelId: 3, estadoId: 1, correo: "e06@cm.com", telefono: "3100000006", creadoEn: new Date() },
  { nombre: "Est. 07", documento: "DOC1007", nivelId: 1, estadoId: 1, correo: "e07@cm.com", telefono: "3100000007", creadoEn: new Date() },
  { nombre: "Est. 08", documento: "DOC1008", nivelId: 2, estadoId: 1, correo: "e08@cm.com", telefono: "3100000008", creadoEn: new Date() },
  { nombre: "Est. 09", documento: "DOC1009", nivelId: 3, estadoId: 1, correo: "e09@cm.com", telefono: "3100000009", creadoEn: new Date() },
  { nombre: "Est. 10", documento: "DOC1010", nivelId: 1, estadoId: 1, correo: "e10@cm.com", telefono: "3100000010", creadoEn: new Date() },
  { nombre: "Est. 11", documento: "DOC1011", nivelId: 2, estadoId: 1, correo: "e11@cm.com", telefono: "3100000011", creadoEn: new Date() },
  { nombre: "Est. 12", documento: "DOC1012", nivelId: 3, estadoId: 1, correo: "e12@cm.com", telefono: "3100000012", creadoEn: new Date() },
  { nombre: "Est. 13", documento: "DOC1013", nivelId: 1, estadoId: 1, correo: "e13@cm.com", telefono: "3100000013", creadoEn: new Date() },
  { nombre: "Est. 14", documento: "DOC1014", nivelId: 2, estadoId: 1, correo: "e14@cm.com", telefono: "3100000014", creadoEn: new Date() },
  { nombre: "Est. 15", documento: "DOC1015", nivelId: 3, estadoId: 1, correo: "e15@cm.com", telefono: "3100000015", creadoEn: new Date() }
]);

db.instrumentos.insertMany([
  { tipoId: 1, marca: "Yamaha", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-001", creadoEn: new Date() },
  { tipoId: 2, marca: "Fender", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-002", creadoEn: new Date() },
  { tipoId: 2, marca: "Ibanez", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-003", creadoEn: new Date() },
  { tipoId: 3, marca: "Strad", estadoId: 2, sedeId: ObjectId(), codigoInventario: "INV-004", creadoEn: new Date() },
  { tipoId: 6, marca: "Casio", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-005", creadoEn: new Date() },
  { tipoId: 5, marca: "Kala", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-006", creadoEn: new Date() },
  { tipoId: 4, marca: "Squier", estadoId: 3, sedeId: ObjectId(), codigoInventario: "INV-007", creadoEn: new Date() },
  { tipoId: 1, marca: "Kawai", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-008", creadoEn: new Date() },
  { tipoId: 2, marca: "Gibson", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-009", creadoEn: new Date() },
  { tipoId: 3, marca: "Yamaha", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-010", creadoEn: new Date() },
  { tipoId: 6, marca: "Roland", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-011", creadoEn: new Date() },
  { tipoId: 5, marca: "Flight", estadoId: 2, sedeId: ObjectId(), codigoInventario: "INV-012", creadoEn: new Date() },
  { tipoId: 4, marca: "Ibanez", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-013", creadoEn: new Date() },
  { tipoId: 1, marca: "Yamaha", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-014", creadoEn: new Date() },
  { tipoId: 2, marca: "Fender", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-015", creadoEn: new Date() },
  { tipoId: 3, marca: "Stentor", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-016", creadoEn: new Date() },
  { tipoId: 6, marca: "Korg", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-017", creadoEn: new Date() },
  { tipoId: 5, marca: "Mahalo", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-018", creadoEn: new Date() },
  { tipoId: 4, marca: "Cort", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-019", creadoEn: new Date() },
  { tipoId: 2, marca: "Epiphone", estadoId: 1, sedeId: ObjectId(), codigoInventario: "INV-020", creadoEn: new Date() }
]);

db.inscripciones.insertMany([
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 400000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 450000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 420000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 500000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 470000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 550000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 380000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 450000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 400000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 500000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 350000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 420000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 410000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 380000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 440000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 460000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 370000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 400000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 390000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 450000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 460000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 370000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 400000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 390000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 450000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 460000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 370000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 400000, fechaInscripcion: new Date(), inscripcionEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 390000, fechaInscripcion: new Date(), inscripcionEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), cursoId: ObjectId(), costo: 450000, fechaInscripcion: new Date(), inscripcionEstadoId: 3, creadoEn: new Date() }
]);

db.reservas_instrumentos.insertMany([
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 1, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 2, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 3, creadoEn: new Date() },
  { estudianteId: ObjectId(), instrumentoId: ObjectId(), sedeId: ObjectId(), fechaReserva: new Date(), reservaEstadoId: 1, creadoEn: new Date() }
]);
