USE wilderness_namibia_db;


CREATE TABLE rates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    camp VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('FI', 'DBB') NOT NULL,
    rate_period VARCHAR(255) NOT NULL,
    sharing_rate VARCHAR(20) NOT NULL,
    supplement_rate VARCHAR(20) NOT NULL,
    UNIQUE KEY camp_period_type_unique (name, rate_period, type)
);