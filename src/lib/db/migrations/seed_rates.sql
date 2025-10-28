-- 1. Select the correct database
USE wilderness_namibia_db;

-- 2. Insert data using INSERT IGNORE
-- This command will attempt to insert all rows. 
-- If a row violates the UNIQUE KEY constraint (name, rate_period, type), 
-- MySQL will simply ignore that row and continue without error.

INSERT IGNORE INTO rates 
    (category, camp, name, type, rate_period, sharing_rate, supplement_rate)
VALUES 
-- Data from rateData (Type 'FI')
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'FI', '6-Jun-26 to 31-May-26', 'R7 318', 'R2 194'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'FI', '1-Apr-26 to 31-May-26', 'R8 932', 'R2 668'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'FI', '1-Jun-26 to 31-Oct-26', 'R11 351', 'R3 388'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'FI', '1-Nov-26 to 19-Dec-26', 'R9 429', 'R2 814'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'FI', '20-Dec-26 to 5-Jan-27', 'R10 603', 'R3 165'),

('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'FI', '6-Jun-26 to 31-May-26', 'R6 835', 'R2 046'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'FI', '1-Apr-26 to 31-May-26', 'R8 215', 'R2 462'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'FI', '1-Jun-26 to 31-Oct-26', 'R10 976', 'R3 276'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'FI', '1-Nov-26 to 19-Dec-26', 'R8 215', 'R2 462'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'FI', '20-Dec-26 to 5-Jan-27', 'R10 976', 'R3 276'),

('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'FI', '6-Jun-26 to 31-May-26', 'R9 131', 'R2 725'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'FI', '1-Apr-26 to 31-May-26', 'R12 133', 'R3 368'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'FI', '1-Jun-26 to 31-Oct-26', 'R16 019', 'R4 781'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'FI', '1-Nov-26 to 19-Dec-26', 'R11 283', 'R3 368'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'FI', '20-Dec-26 to 5-Jan-27', 'R16 019', 'R4 781'),

('Classic', 'Desert Rhino', 'Wilderness Desert Rhino Camp', 'FI', '6-Jun-26 to 31-May-26', 'R11 067', 'R3 309'),
('Classic', 'Desert Rhino', 'Wilderness Desert Rhino Camp', 'FI', '1-Apr-26 to 31-May-26', 'R14 486', 'R4 328'),
('Classic', 'Desert Rhino', 'Wilderness Desert Rhino Camp', 'FI', '1-Jun-26 to 31-Oct-26', 'R18 235', 'R5 443'),
('Classic', 'Desert Rhino', 'Wilderness Desert Rhino Camp', 'FI', '1-Nov-26 to 19-Dec-26', 'R11 486', 'R3 428'),
('Classic', 'Desert Rhino', 'Wilderness Desert Rhino Camp', 'FI', '20-Dec-26 to 5-Jan-27', 'R18 235', 'R5 443'),

('Classic', 'Kulene', 'Wilderness Serra Cafema', 'FI', '6-Jun-26 to 31-May-26', 'R17 023', 'R5 081'),
('Classic', 'Kulene', 'Wilderness Serra Cafema', 'FI', '1-Apr-26 to 31-May-26', 'R17 150', 'R5 119'),
('Classic', 'Kulene', 'Wilderness Serra Cafema', 'FI', '1-Jun-26 to 31-Oct-26', 'R28 372', 'R8 469'),
('Classic', 'Kulene', 'Wilderness Serra Cafema', 'FI', '1-Nov-26 to 19-Dec-26', 'R17 150', 'R5 119'),
('Classic', 'Kulene', 'Wilderness Serra Cafema', 'FI', '20-Dec-26 to 5-Jan-27', 'R28 372', 'R8 469'),

('Classic', 'Skeleton Coast', 'Wilderness Hoanib Skeleton Coast Camp', 'FI', '6-Jun-26 to 31-May-26', 'R19 055', 'R5 688'),
('Classic', 'Skeleton Coast', 'Wilderness Hoanib Skeleton Coast Camp', 'FI', '1-Apr-26 to 31-May-26', 'R20 655', 'R6 165'),
('Classic', 'Skeleton Coast', 'Wilderness Hoanib Skeleton Coast Camp', 'FI', '1-Jun-26 to 31-Oct-26', 'R31 881', 'R9 516'),
('Classic', 'Skeleton Coast', 'Wilderness Hoanib Skeleton Coast Camp', 'FI', '1-Nov-26 to 19-Dec-26', 'R20 659', 'R6 166'),
('Classic', 'Skeleton Coast', 'Wilderness Hoanib Skeleton Coast Camp', 'FI', '20-Dec-26 to 5-Jan-27', 'R31 881', 'R9 516'),

('Classic', 'Sossusvlei', 'Wilderness-Little-Kulala', 'FI', '6-Jun-26 to 31-May-26', 'R16 260', 'R4 854'),
('Classic', 'Sossusvlei', 'Wilderness-Little-Kulala', 'FI', '1-Apr-26 to 31-May-26', 'R16 846', 'R5 028'),
('Classic', 'Sossusvlei', 'Wilderness-Little-Kulala', 'FI', '1-Jun-26 to 31-Oct-26', 'R26 747', 'R7 984'),
('Classic', 'Sossusvlei', 'Wilderness-Little-Kulala', 'FI', '1-Nov-26 to 19-Dec-26', 'R16 846', 'R5 028'),
('Classic', 'Sossusvlei', 'Wilderness-Little-Kulala', 'FI', '20-Dec-26 to 5-Jan-27', 'R26 747', 'R7 984'),

-- Data from dbbRates (Type 'DBB')
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'DBB', '6-Jun-26 to 31-May-26', 'R4 503', 'R1 344'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'DBB', '1-Apr-26 to 31-May-26', 'R5 804', 'R1 733'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'DBB', '1-Jun-26 to 31-Oct-26', 'R8 561', 'R2 555'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'DBB', '1-Nov-26 to 19-Dec-26', 'R5 755', 'R1 718'),
('Adventures', 'Doro Nawas', 'Wilderness-Doro-Nawas', 'DBB', '20-Dec-26 to 5-Jan-27', 'R6 138', 'R1 832'),

('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'DBB', '6-Jun-26 to 31-May-26', 'R4 219', 'R1 259'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'DBB', '1-Apr-26 to 31-May-26', 'R5 340', 'R1 594'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'DBB', '1-Jun-26 to 31-Oct-26', 'R7 876', 'R2 351'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'DBB', '1-Nov-26 to 19-Dec-26', 'R5 451', 'R1 627'),
('Adventures', 'Sossusvlei', 'Wilderness Kulala Desert Lodge', 'DBB', '20-Dec-26 to 5-Jan-27', 'R5 905', 'R1 763'),

('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'DBB', '6-Jun-26 to 31-May-26', 'R5 662', 'R1 690'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'DBB', '1-Apr-26 to 31-May-26', 'R7 111', 'R2 122'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'DBB', '1-Jun-26 to 31-Oct-26', 'R12 755', 'R3 807'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'DBB', '1-Nov-26 to 19-Dec-26', 'R7 315', 'R2 184'),
('Classic', 'Damaraland', 'Wilderness Damaraland Camp', 'DBB', '20-Dec-26 to 5-Jan-27', 'R8 178', 'R2 441');