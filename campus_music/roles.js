db.createRole({
  role: "rolAdministrador",
  privileges: [
    {
      resource: { db: "Proyecto_DB", collection: "" },
      actions: [
        "find", "insert", "update", "remove",
        "createCollection", "createIndex", "dropCollection", "collMod"
      ]
    }
  ],
  roles: [
    { role: "readWrite", db: "Proyecto_DB" },
    { role: "dbAdmin", db: "Proyecto_DB" },
    { role: "userAdmin", db: "Proyecto_DB" }
  ]
});

db.createRole({
  role: "rolEmpleadoSede",
  privileges: [
    { resource: { db: "Proyecto_DB", collection: "estudiantes" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "profesores" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "cursos" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "inscripciones" }, actions: ["find", "insert"] },
    { resource: { db: "Proyecto_DB", collection: "reservas_instrumentos" }, actions: ["find", "insert"] }
  ],
  roles: []
});

db.createRole({
  role: "rolEstudiante",
  privileges: [
    { resource: { db: "Proyecto_DB", collection: "estudiantes" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "cursos" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "inscripciones" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "reservas_instrumentos" }, actions: ["find", "insert"] }
  ],
  roles: []
});

db.createUser({
  user: "admin_user",
  pwd: "Admin#2025",
  roles: [{ role: "rolAdministrador", db: "Proyecto_DB" }]
});

db.createUser({
  user: "empleado_bogota",
  pwd: "Empleado#2025",
  roles: [{ role: "rolEmpleadoSede", db: "Proyecto_DB" }]
});

db.createUser({
  user: "estudiante_e01",
  pwd: "Estudiante#2025",
  roles: [{ role: "rolEstudiante", db: "Proyecto_DB" }]
});
