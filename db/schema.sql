CREATE DATABASE soup_db;

USE soup_db;

CREATE TABLE soups
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	slurped BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);