db_config

db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "documento", "nivel", "estado"],
      properties: {
        nombre: { bsonType: "string", minLength: 3 },
        documento: { bsonType: "string", minLength: 5 },
        nivel: { enum: ["basico", "intermedio", "avanzado"] },
        estado: { enum: ["activo", "inactivo"] },
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
    nombre: "Juan Pérez",
    documento: "TI109890839",
    nivel: "basico",
    estado: "activo",
    correo: "juan@gmail.com",
    telefono: "3171234567",
    creadoEn: new Date()
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
