
--source schema.sql in terminal

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
 devoured tinyint(1) NULL,
 date timestamp NULL,
PRIMARY KEY (id)
);

