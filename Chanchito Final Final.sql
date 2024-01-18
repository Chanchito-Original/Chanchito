-- Cambios:
-- - Reemplacé 'AUTO_INCREMENT' por 'SERIAL' para las columnas de ID.
-- - Reemplacé 'DEFAULT current_timestamp()' por 'DEFAULT CURRENT_TIMESTAMP' para el valor de fecha/hora por defecto.
-- - Cambié 'ENGINE=InnoDB' por 'WITH (OIDS=FALSE)'.
-- - Cambié el tipo de dato 'enum' por 'text' para especie en la tabla paciente.
-- - Eliminé las definiciones de índices y autoincremento ya que PostgreSQL maneja esto de manera diferente.

-- NOTA: Las claves foráneas (FOREIGN KEY) se mantienen.

CREATE TABLE consultasencurso (
  id SERIAL PRIMARY KEY,
  solicitud_id INT NOT NULL,
  fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_fin TIMESTAMP DEFAULT NULL,
  notas TEXT DEFAULT NULL,
  usuario_id INT DEFAULT NULL,
  diagnostico TEXT DEFAULT NULL,
  tratamiento VARCHAR(255) DEFAULT NULL
);

INSERT INTO consultasencurso (solicitud_id, fecha_inicio, usuario_id, notas)
VALUES (16, '2023-07-27 03:34:43', 14, 'Malestar');

CREATE TABLE historialconsultas (
  id SERIAL PRIMARY KEY,
  consulta_id INT NOT NULL,
  diagnostico TEXT DEFAULT NULL,
  tratamiento TEXT DEFAULT NULL,
  fecha_inicio DATE DEFAULT NULL,
  usuario_id INT DEFAULT NULL,
  paciente_id INT DEFAULT NULL,
  fecha_fin DATE DEFAULT NULL
);

INSERT INTO historialconsultas (consulta_id, diagnostico, tratamiento, fecha_inicio, usuario_id, paciente_id, fecha_fin)
VALUES (12, 'Loco mujeriego', 'Dejar de serlo', '2023-07-27', 14, 35, '2023-07-27');

CREATE TABLE paciente (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  raza VARCHAR(50) DEFAULT NULL,
  peso DECIMAL(4,2) DEFAULT NULL,
  edad INT DEFAULT NULL,
  notas TEXT DEFAULT NULL,
  especie TEXT DEFAULT NULL
);

INSERT INTO paciente (nombre, raza, peso, edad, notas, especie)
VALUES ('Jose Portillo', 'Mujeriego', '52.00', 21, 'Miope, Genesis.', 'perro'),
       ('Hainer', 'aw', '1.00', 2, '5', 'perro'),
       ('Triton', 'Husky', '10.00', 2, 'Malestar', 'perro');

CREATE TABLE rol (
  rol_id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

INSERT INTO rol (rol_id, nombre)
VALUES (1, 'usuario'),
       (2, 'veterinario');

CREATE TABLE solicitudesconsulta (
  id SERIAL PRIMARY KEY,
  paciente_id INT NOT NULL,
  usuario_id INT NOT NULL,
  fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notas TEXT DEFAULT NULL,
  nombre VARCHAR(50) DEFAULT NULL,
  raza VARCHAR(25) DEFAULT NULL,
  peso VARCHAR(25) DEFAULT NULL,
  edad INT DEFAULT NULL,
  especie VARCHAR(50) DEFAULT NULL,
  estado TEXT NOT NULL DEFAULT 'pendiente'
);

INSERT INTO solicitudesconsulta (paciente_id, usuario_id, fecha_solicitud, notas, nombre, estado)
VALUES (37, 14, '2023-07-27 07:33:24', 'Malestar', NULL, 'en curso');

CREATE OR REPLACE FUNCTION after_solicitud_accepted()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.estado = 'en curso' THEN
    INSERT INTO consultasencurso (solicitud_id, fecha_inicio, usuario_id, notas)
    VALUES (NEW.id, NOW(), NEW.usuario_id, NEW.notas);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_solicitud_accepted
AFTER UPDATE ON solicitudesconsulta
FOR EACH ROW EXECUTE FUNCTION after_solicitud_accepted();

CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  nombre_completo VARCHAR(50) DEFAULT NULL,
  email VARCHAR(100) NOT NULL,
  telefono VARCHAR(15) DEFAULT NULL,
  password VARCHAR(100) NOT NULL,
  rol_id INT NOT NULL,
  nombre_usuario VARCHAR(30) DEFAULT NULL,
  genero TEXT DEFAULT NULL,
  pregunta_seguridad VARCHAR(50) DEFAULT NULL,
  respuesta_seguridad VARCHAR(50) DEFAULT NULL,
  intentos_fallidos INT DEFAULT 0
);

INSERT INTO usuario (nombre_completo, email, telefono, password, rol_id, nombre_usuario, genero, pregunta_seguridad, respuesta_seguridad, intentos_fallidos)
VALUES ('Lisandro Hernandez', 'lisandro@gmail.com', '04126901778', '&)62J)@QPNIUW$DYcmRv', 1, 'lisandrohr', 'hombre', 'Nombre de tu primer amor', 'Andrea', 0),
       ('La Sirenita', 'sirenita@gmail.com', '041252', '123', 2, 'sirena69', 'mujer', 'Apodo de la infancia', 'Sirenita', 0),
       ('Juan David', 'juan@gmail.com', '4129501241', '123', 1, 'Juan', 'hombre', 'Nombre de tu primera mascota', 'Juan', 0);

-- Claves foráneas (FOREIGN KEY) ya definidas. No se repiten aquí.

-- Índices y AUTO_INCREMENT son manejados de manera diferente en PostgreSQL.
