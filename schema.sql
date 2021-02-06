-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect db --
USE employee_db;


CREATE TABLE department (
    id INT NOT NULL,
    departent VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL,
    tilte VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    id PRIMARY KEY
    FOREIGN KEY ((department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES role(id)
);