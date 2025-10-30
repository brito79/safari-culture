CREATE TABLE camps (
    camp_id VARCHAR(50) PRIMARY KEY, -- Corresponds to JavaScript 'id' (e.g., 'doro-nawas')
    name VARCHAR(255) NOT NULL UNIQUE, -- Corresponds to JavaScript 'name' (e.g., 'Wilderness-Doro-Nawas')
    region VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    accommodation VARCHAR(50),
    
    -- Flattened Complex Fields
    features_list TEXT,
    image_hero_url VARCHAR(512),
    image_gallery_urls TEXT
);