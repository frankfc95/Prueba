create database empresaABC;

use empresaABC;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    telefono INT(8) NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL  
);

CREATE TABLE tipo_habitacion (
    id_t_habitacion INT AUTO_INCREMENT PRIMARY KEY,
    nombre_t_h VARCHAR(15) NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL  
);

CREATE TABLE habitaciones (
    id_numero_habitacion INT AUTO_INCREMENT PRIMARY KEY,
    precio INT NOT NULL,
    disponible TINYINT(2) UNSIGNED DEFAULT 1 NOT NULL,
    t_habitacion_id INT NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY(t_habitacion_id) REFERENCES tipo_habitacion(id_t_habitacion)  
);

CREATE TABLE reservas (
    numero_reserva INT AUTO_INCREMENT PRIMARY KEY,
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    cliente_id INT NOT NULL,
    numero_habitacion_id INT NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY(cliente_id) REFERENCES clientes(id_cliente),
    FOREIGN KEY(numero_habitacion_id) REFERENCES habitaciones(id_numero_habitacion)
);