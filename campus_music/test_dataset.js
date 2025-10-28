

//Inserciones de sedes
db.sedes.insertMany([
    { ciudad: "Bogotá", direccion: "Cra 1 # 23-45", capacidad: 300, estadoId: 1, creadoEn: new Date() },
    { ciudad: "Medellín", direccion: "Av El Poblado 45-67", capacidad: 200, estadoId: 1, creadoEn: new Date() },
    { ciudad: "Cali", direccion: "Calle 5 # 67-89", capacidad: 180, estadoId: 1, creadoEn: new Date() }
  ]);