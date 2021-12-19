INSERT INTO departments (name)
VALUES
('marketing'),
('sales'),
('content creation'),
('marketing'),
('sales'),
('content creation'),
('marketing'),
('sales'),
('content creation'),
('marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
('marketing coordinator', 50000, 1),
('sales lead', 90000, 2),
('producer', 85000, 3),
('marketing lead', 90000, 1),
('sales lead', 90000, 2),
('video editor', 75000, 3),
('marketing coordinator', 50000, 1),
('sales lead', 90000, 2),
('producer', 85000, 3),
('marketing lead', 90000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Kelly', 'Arnold', 1, '123'),
('Lisa', 'Crumb', 2, '456'),
('Becky', 'Ham', 3, '789'),
('Nicole', 'Spenz', 1, '123'),
('Bronwyn', 'Beltz', 2, '456'),
('Rachelle', 'Lopez', 3, '789'),
('Ophelia', 'Lauren', 1, '123'),
('Cathy', 'Candle', 2, '456'),
('Simone', 'Cloud', 3, '789'),
('Tinsley', 'Montgomery', 1, '123');



