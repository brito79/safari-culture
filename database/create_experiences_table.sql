-- Create experiences_camps table
-- This table stores all camp experiences/activities available across Wilderness Namibia camps

CREATE TABLE IF NOT EXISTS experiences_camps (
  id INT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  subtitle VARCHAR(150),
  description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  image_url VARCHAR(512) NOT NULL,
  duration VARCHAR(50),
  difficulty VARCHAR(50),
  best_time VARCHAR(100),
  highlights TEXT, -- Stores comma/pipe-separated list
  camps TEXT       -- Stores comma/pipe-separated list
);

-- Insert sample data
INSERT INTO experiences_camps (
  id,
  title, 
  subtitle, 
  description, 
  long_description, 
  image_url, 
  duration, 
  difficulty, 
  best_time, 
  highlights, 
  camps
) VALUES 
(
  1,
  'Nature Drives',
  'Desert Wildlife Encounters',
  'Get close to rare wildlife, explore otherworldly landscapes and immerse yourself in uncharted territory on a nature drive through Namibia''s pristine wilderness.',
  'Experience the thrill of tracking desert-adapted elephants, black rhinos, and other wildlife in their natural habitat. Our expert guides navigate ancient riverbeds and dramatic landscapes, sharing intimate knowledge of animal behavior and desert survival strategies.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/Wilderness-Doro-Nawas_1.jpg',
  '3-4 hours',
  'Easy to Moderate',
  'Early morning & late afternoon',
  'Desert-adapted elephant tracking, Black rhino conservation encounters, Geological formation exploration, Ancient riverbed navigation',
  'Doro Nawas, Damaraland Camp, Hoanib Skeleton Coast'
),
(
  2,
  'Skeleton Coast Expeditions',
  'Where Desert Meets Ocean',
  'Explore the dramatic Skeleton Coast where the ancient Namib Desert meets the wild Atlantic Ocean, discovering shipwrecks and massive seal colonies.',
  'Journey to one of the world''s most remote coastlines, where powerful ocean currents have claimed countless vessels. Witness Cape fur seals in their thousands at Cape Cross, explore shipwreck sites, and marvel at the stark beauty of this untamed wilderness.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/1758191665162oevans-1636.jpg',
  'Full day',
  'Easy',
  'Year-round',
  'Cape Cross seal colony (200,000+ seals), Historic shipwreck sites, Dramatic coastal landscapes, Marine wildlife observation',
  'Hoanib Skeleton Coast'
),
(
  3,
  'Sossusvlei Dune Adventures',
  'Ancient Sand Seas',
  'Scale the world''s highest sand dunes in the heart of the Namib Desert, witnessing sunrise over landscapes unchanged for millions of years.',
  'Climb the iconic red dunes of Sossusvlei, including the famous Big Daddy and Dune 45. Experience the ethereal beauty of Dead Vlei''s ancient camel thorn trees, perfectly preserved by the desert''s dry climate for over 600 years.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/doronawas_02-19-27e.jpg',
  'Full day',
  'Moderate to Challenging',
  'Sunrise',
  'Big Daddy dune climbing, Dead Vlei ancient trees, Sunrise photography, Sand sea exploration',
  'Little Kulala'
),
(
  4,
  'Hot Air Balloon Safaris',
  'Aerial Desert Perspectives',
  'Float silently over the ancient Namib Desert for unparalleled aerial views of this moonlike landscape, followed by a champagne breakfast in the wilderness.',
  'Rise with the sun for a magical hot air balloon journey over the world''s oldest desert. Drift silently above red dunes, ancient riverbeds, and desert plains while spotting wildlife from a unique vantage point. Land for a champagne breakfast in the wilderness.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/Wilderness-Doro-Nawas_2.jpg',
  'Half day',
  'Easy',
  'Early morning',
  'Silent flight over desert, Aerial wildlife viewing, Champagne breakfast, Sunrise desert vistas',
  'Little Kulala, Doro Nawas'
),
(
  5,
  'Cultural Nature Walks',
  'Living Heritage Encounters',
  'Walk with Himba communities through their ancestral lands, learning traditional tracking skills and desert survival techniques passed down through generations.',
  'Join Himba guides for authentic cultural exchanges in their natural environment. Learn traditional plant uses, animal tracking, and survival skills while supporting community-based conservation efforts in this pristine wilderness.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/Wilderness-Doro-Nawas_2.jpg',
  'Half day',
  'Easy',
  'Morning or afternoon',
  'Traditional tracking skills, Medicinal plant knowledge, Cultural exchange, Community conservation support',
  'Hoanib Skeleton Coast, Damaraland Camp'
),
(
  6,
  'Geological Expeditions',
  'Ancient Earth Stories',
  'Explore Namibia''s fascinating geological heritage, from petrified forests to dramatic mountain formations that tell Earth''s ancient stories.',
  'Discover the Petrified Forest with trees over 280 million years old, explore the Burnt Mountain''s colorful mineral deposits, and marvel at the Organ Pipes'' geometric basalt columns. Each site reveals chapters of Earth''s geological history.',
  'https://safari-culture-images.s3.amazonaws.com/images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg',
  'Half day',
  'Easy to Moderate',
  'Morning or afternoon',
  '280-million-year-old petrified trees, Burnt Mountain mineral formations, Organ Pipes basalt columns, Geological history interpretation',
  'Damaraland Camp, Doro Nawas'
);

-- Verify the data
SELECT * FROM experiences_camps;
