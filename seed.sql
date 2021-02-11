USE employee_db;

INSERT INTO department (department) VALUES (Marketing);
INSERT INTO department (department) VALUES (Accounting);
INSERT INTO department (department) VALUES (Finance);
INSERT INTO department (department) VALUES (Legal);

INSERT INTO roles (title, salaray, department_id) VALUES ('manager', 80000, 1);
INSERT INTO roles (title, salaray, department_id) VALUES ('manager', 80000, 2);
INSERT INTO roles (title, salaray, department_id) VALUES ('manager', 80000, 3);
INSERT INTO roles (title, salaray, department_id) VALUES ('manager', 80000, 4);
INSERT INTO roles (title, salaray, department_id) VALUES ('associate', 60000, 1);
INSERT INTO roles (title, salaray, department_id) VALUES ('associate', 60000, 2);
INSERT INTO roles (title, salaray, department_id) VALUES ('associate', 60000, 3);
INSERT INTO roles (title, salaray, department_id) VALUES ('associate', 60000, 4);
INSERT INTO roles (title, salaray, department_id) VALUES ('assistant', 60000, 1);
INSERT INTO roles (title, salaray, department_id) VALUES ('assistant', 60000, 2);
INSERT INTO roles (title, salaray, department_id) VALUES ('assistant', 60000, 3);
INSERT INTO roles (title, salaray, department_id) VALUES ('assistant', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'James', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Billy', 'Bob', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Phil', 'Dude', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dude', 'Man', 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Toast', 'Er', 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Pop', 'Corn', 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Steve', 'Story', 5, 5);



