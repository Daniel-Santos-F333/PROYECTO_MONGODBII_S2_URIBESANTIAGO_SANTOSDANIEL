use("Proyecto_DB");

db.createRole({
  role: "rolAdministrador",
  privileges: [
    {
      resource: { db: "Proyecto_DB", collection: "" },
      actions: [
        "find", "insert", "update", "remove",
        "createCollection", "createIndex",
        "dropCollection", "collMod"
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
    { resource: { db: "Proyecto_DB", collection: "inscripciones" }, actions: ["insert", "find"] },
    { resource: { db: "Proyecto_DB", collection: "reservas_instrumentos" }, actions: ["insert", "find"] }
  ],
  roles: []
});

db.createRole({
  role: "rolEstudiante",
  privileges: [
    { resource: { db: "Proyecto_DB", collection: "estudiantes" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "cursos" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "inscripciones" }, actions: ["find"] },
    { resource: { db: "Proyecto_DB", collection: "reservas_instrumentos" }, actions: ["insert", "find"] }
  ],
  roles: []
});

db.grantRolesToUser("admin_user", [
  { role: "rolAdministrador", db: "Proyecto_DB" }
]);

db.grantRolesToUser("empleado_bogota", [
  { role: "rolEmpleadoSede", db: "Proyecto_DB" }
]);

db.grantRolesToUser("estudiante_e01", [
  { role: "rolEstudiante", db: "Proyecto_DB" }
]);
