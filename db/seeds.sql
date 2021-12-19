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
('Kelly', 'Arnold', 1, 'Slytherin'),
('Lisa', 'Crumb', 2, 'Hufflepuff'),
('Becky', 'Ham', 3, 'Gryffindor'),
('Nicole', 'Spenz', 1, 'Slytherin'),
('Bronwyn', 'Beltz', 2, 'Hufflepuff'),
('Rachelle', 'Lopez', 3, 'Gryffindor'),
('Ophelia', 'Lauren', 1, 'Slytherin'),
('Cathy', 'Candle', 2, 'Hufflepuff'),
('Simone', 'Cloud', 3, 'Gryffindor'),
('Tinsley', 'Montgomery', 1, 'Slytherin');



