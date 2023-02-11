INSERT INTO departments (name) VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Engineering');

INSERT INTO roles (id, title, salary, department_id) VALUES
  (1, 'Salesperson', 50000, 1),
  (2, 'Marketing Manager', 80000, 2),
  (3, 'Engineering Manager', 90000, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, null),
  (2, 'Jane', 'Doe', 2, 1),
  (3, 'Jim', 'Smith', 3, 2);