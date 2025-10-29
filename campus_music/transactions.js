use("Proyecto_DB")

// Iniciar sesión y transacción
session = db.getMongo().startSession()
session.startTransaction({ readConcern: { level: "snapshot" }, writeConcern: { w: "majority" } })

// 2) Insertar inscripción (reemplazar IDs)
session.getDatabase("Proyecto_DB").getCollection("inscripciones").insertOne(
  {
    estudianteId: ObjectId("ID_REEMPLAZADO"),
    cursoId: ObjectId("CURSO_REEMPLAZADITO"),
    costo: 400000,
    fechaInscripcion: new Date(),
    inscripcionEstadoId: 1,
    creadoEn: new Date()
  },
  { session: session }
)

//  Decrementar cupos del curso si hay disponibilidad (la condición $gt:0 evita números negativos)
session.getDatabase("Proyecto_DB").getCollection("cursos").updateOne(
  { _id: ObjectId("CURSO_REEMPLAZADITO"), cupos: { $gt: 0 } },
  { $inc: { cupos: -1 } },
  { session: session }
)

//  Confirmar (commit) la transacción
session.commitTransaction()
session.endSession()

// Si ocurrió un error :
// session.abortTransaction(); session.endSession();
