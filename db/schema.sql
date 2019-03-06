USE k0jeiipjuruj9prj

CREATE DATABASE burgers_db; IF NOT EXISTS burgers_db;
USE burgers_db

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT 0,
	bdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);