USE wilderness_namibia_db;

CREATE TABLE experiences_camps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT NOT NULL,
    long_description TEXT,
    image_url VARCHAR(512),
    duration VARCHAR(100),
    difficulty VARCHAR(50),
    best_time VARCHAR(255),
    highlights TEXT,  -- Pipe-separated values (e.g., 'UNESCO World Heritage|Ancient engravings|Archaeological insights')
    camps TEXT,       -- Pipe-separated camp IDs (e.g., 'doro-nawas|damaraland-camp')
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_title (title),
    INDEX idx_difficulty (difficulty)
);
