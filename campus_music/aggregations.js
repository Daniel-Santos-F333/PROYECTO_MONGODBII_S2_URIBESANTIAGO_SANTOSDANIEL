use("Proyecto_DB");

// 1. ¿Cuántos estudiantes se inscribieron por sede en el último mes?

db.inscripciones.aggregate([
  { $match: { fechaInscripcion: { $gte: new Date(Date.now() - 30*24*60*60*1000) } } },
  { $lookup: { from: "cursos", localField: "cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $lookup: { from: "sedes", localField: "curso.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $group: { _id: "$sede._id", ciudad: { $first: "$sede.ciudad" }, inscripcionesUlt30d: { $count: {} } } },
  { $sort: { inscripcionesUlt30d: -1, ciudad: 1 } }
]);

// 2. ¿Cuáles son los cursos más demandados en cada sede?

db.inscripciones.aggregate([
  { $lookup: { from: "cursos", localField: "cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $lookup: { from: "sedes", localField: "curso.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $group: {
      _id: { sedeId: "$sede._id", cursoId: "$curso._id" },
      ciudad: { $first: "$sede.ciudad" },
      instrumentoTipoId: { $first: "$curso.instrumentoTipoId" },
      nivelId: { $first: "$curso.nivelId" },
      inscripciones: { $count: {} }
  }},
  { $setWindowFields: {
      partitionBy: "$_id.sedeId",
      sortBy: { inscripciones: -1, "_id.cursoId": 1 },
      output: { rank: { $rank: {} } }
  }},
  { $match: { rank: 1 } },
  { $project: { _id: 0, sedeId: "$_id.sedeId", cursoId: "$_id.cursoId", ciudad: 1, instrumentoTipoId: 1, nivelId: 1, inscripciones: 1 } },
  { $sort: { ciudad: 1 } }
]);

// 3. ¿Cuál es el ingreso total generado por inscripciones en cada sede?

db.inscripciones.aggregate([
  { $lookup: { from: "cursos", localField: "cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $lookup: { from: "sedes", localField: "curso.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $group: { _id: "$sede._id", ciudad: { $first: "$sede.ciudad" }, ingresoTotal: { $sum: "$costo" }, inscripciones: { $count: {} } } },
  { $sort: { ingresoTotal: -1 } }
]);

// 4. ¿Qué profesor tiene más estudiantes asignados?

db.inscripciones.aggregate([
  { $group: { _id: { cursoId: "$cursoId", estudianteId: "$estudianteId" } } },            // pares únicos curso-estudiante
  { $lookup: { from: "cursos", localField: "_id.cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $group: { _id: "$curso.profesorId", estudiantesUnicos: { $addToSet: "$_id.estudianteId" } } },
  { $project: { profesorId: "$_id", _id: 0, totalEstudiantes: { $size: "$estudiantesUnicos" } } },
  { $sort: { totalEstudiantes: -1 } },
  { $limit: 1 },
  { $lookup: { from: "profesores", localField: "profesorId", foreignField: "_id", as: "profesor" } },
  { $unwind: "$profesor" },
  { $project: { profesorId: 1, nombre: "$profesor.nombre", totalEstudiantes: 1 } }
]);

// 5. ¿Qué instrumento es el más reservado?

db.reservas_instrumentos.aggregate([
  { $group: { _id: "$instrumentoId", reservas: { $count: {} } } },
  { $sort: { reservas: -1 } },
  { $limit: 1 },
  { $lookup: { from: "instrumentos", localField: "_id", foreignField: "_id", as: "inst" } },
  { $unwind: "$inst" },
  { $project: { instrumentoId: "$_id", _id: 0, reservas: 1, tipoId: "$inst.tipoId", marca: "$inst.marca", sedeId: "$inst.sedeId" } }
]);

// 6. Historial de cursos de un estudiante (fecha, sede, curso, profesor, nivel, costo)

db.inscripciones.aggregate([
  { $match: { estudianteId: ObjectId("EL_ID_DEL_ESTUDIANTE") } },
  { $lookup: { from: "cursos", localField: "cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $lookup: { from: "sedes", localField: "curso.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $lookup: { from: "profesores", localField: "curso.profesorId", foreignField: "_id", as: "prof" } },
  { $unwind: "$prof" },
  { $lookup: { from: "nivel", localField: "curso.nivelId", foreignField: "_id", as: "nivel" } },
  { $unwind: "$nivel" },
  { $project: {
      _id: 0,
      fechaInscripcion: 1,
      costo: 1,
      sede: "$sede.ciudad",
      cursoId: "$curso._id",
      instrumentoTipoId: "$curso.instrumentoTipoId",
      nivel: "$nivel.nombre",
      profesor: "$prof.nombre"
  }},
  { $sort: { fechaInscripcion: -1 } }
]);

// 7. Listar los cursos actualmente en ejecución en cada sede

db.cursos.aggregate([
  { $match: { cursoEstadoId: 1 } },
  { $lookup: { from: "sedes", localField: "sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $project: {
      _id: 0,
      sedeId: "$sede._id",
      ciudad: "$sede.ciudad",
      cursoId: "$_id",
      instrumentoTipoId: 1,
      nivelId: 1,
      duracionSemanas: 1,
      cupos: 1,
      costo: 1
  }},
  { $sort: { ciudad: 1, instrumentoTipoId: 1, nivelId: 1 } }
]);

// 8. Detectar cursos que excedieron el cupo permitido en algún momento

db.inscripciones.aggregate([
  { $group: { _id: "$cursoId", inscripcionesTotales: { $count: {} } } },
  { $lookup: { from: "cursos", localField: "_id", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $match: { $expr: { $gt: ["$inscripcionesTotales", "$curso.cupos"] } } },
  { $lookup: { from: "sedes", localField: "curso.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $project: {
      _id: 0,
      cursoId: "$_id",
      sede: "$sede.ciudad",
      cupoPermitido: "$curso.cupos",
      inscripcionesTotales: 1,
      exceso: { $subtract: ["$inscripcionesTotales", "$curso.cupos"] },
      instrumentoTipoId: "$curso.instrumentoTipoId",
      nivelId: "$curso.nivelId"
  }},
  { $sort: { exceso: -1 } }
]);
