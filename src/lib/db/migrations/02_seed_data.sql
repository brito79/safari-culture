-- ============================================================================
-- Wilderness Namibia - Seed Data (Production-Ready)
-- ============================================================================
-- Purpose: Insert real data for 4 camps, 6 experiences, rates, and sample content
-- Database: MySQL 8.x (Amazon RDS)
-- Tool: MySQL Workbench
-- Execution: Run after 01_create_schema.sql
-- 
-- Includes:
-- - 4 Real Camps: Doro Nawas, Damaraland Camp, Hoanib Skeleton Coast, Little Kulala
-- - 3 Regions: Damaraland, Skeleton Coast, Namib Desert
-- - 6 Shared Experiences
-- - 5 Rate Seasons per camp (matching your actual rate periods)
-- - FI and DBB rates with real pricing
-- - Sample images, contacts, and inquiry
-- 
-- Date: 2025-10-27
-- ============================================================================

USE wilderness_namibia;

START TRANSACTION;

-- ============================================================================
-- ROLES
-- ============================================================================
INSERT INTO roles (id, name, permissions) VALUES
(
  '10000000-0000-0000-0000-000000000001',
  'admin',
  JSON_OBJECT(
    'camps', JSON_ARRAY('view', 'create', 'edit', 'delete'),
    'rates', JSON_ARRAY('view', 'create', 'edit', 'delete'),
    'experiences', JSON_ARRAY('view', 'create', 'edit', 'delete'),
    'inquiries', JSON_ARRAY('view', 'respond', 'export'),
    'analytics', JSON_ARRAY('view'),
    'users', JSON_ARRAY('view', 'manage')
  )
),
(
  '10000000-0000-0000-0000-000000000002',
  'public',
  JSON_OBJECT(
    'camps', JSON_ARRAY('view'),
    'rates', JSON_ARRAY('view'),
    'experiences', JSON_ARRAY('view'),
    'inquiries', JSON_ARRAY('create')
  )
);

-- ============================================================================
-- USERS
-- ============================================================================
INSERT INTO users (id, auth0_sub, email, name, role_id) VALUES
(
  '20000000-0000-0000-0000-000000000001',
  'auth0|admin-placeholder-sub-12345',
  'admin@wilderness-namibia.com',
  'System Administrator',
  '10000000-0000-0000-0000-000000000001'
);

-- ============================================================================
-- REGIONS
-- ============================================================================
INSERT INTO regions (id, name, description) VALUES
(
  '25000000-0000-0000-0000-000000000001',
  'Damaraland',
  'Rugged landscapes with desert-adapted wildlife including elephants and black rhinos. Ancient rock art sites and geological formations.'
),
(
  '25000000-0000-0000-0000-000000000002',
  'Skeleton Coast',
  'Where the ancient Namib Desert meets the wild Atlantic Ocean. Remote wilderness with shipwrecks, seal colonies, and dramatic coastal scenery.'
),
(
  '25000000-0000-0000-0000-000000000003',
  'Namib Desert',
  'The world''s oldest desert featuring towering red sand dunes, the iconic Sossusvlei, and Dead Vlei''s ancient camel thorn trees.'
);

-- ============================================================================
-- CAMPS (4 Real Camps)
-- ============================================================================
INSERT INTO camps (id, name, slug, region_id, description, accommodation_summary, from_price_amount, from_price_currency, capacity_total, min_stay_default, location, status) VALUES
(
  '30000000-0000-0000-0000-000000000001',
  'Doro Nawas',
  'doro-nawas',
  '25000000-0000-0000-0000-000000000001',
  'Experience the rugged beauty of Damaraland with desert-adapted elephants and ancient rock art. This intimate camp offers panoramic views of the Huab River valley.',
  '16 Tented Rooms',
  7318.00,
  'ZAR',
  32,
  2,
  JSON_OBJECT(
    'country', 'Namibia',
    'region', 'Damaraland',
    'coordinates', JSON_OBJECT('lat', -20.5892, 'lng', 14.2748),
    'altitude', '1,200m',
    'nearest_town', 'Twyfelfontein (45km)'
  ),
  'published'
),
(
  '30000000-0000-0000-0000-000000000002',
  'Damaraland Camp',
  'damaraland-camp',
  '25000000-0000-0000-0000-000000000001',
  'Nestled in the heart of Damaraland, this camp offers exceptional wildlife viewing including desert rhinos and elephants in their natural habitat.',
  '10 Luxury Tents',
  9131.00,
  'ZAR',
  20,
  2,
  JSON_OBJECT(
    'country', 'Namibia',
    'region', 'Damaraland',
    'coordinates', JSON_OBJECT('lat', -20.4123, 'lng', 14.3456),
    'altitude', '1,000m',
    'nearest_town', 'Khorixas (60km)'
  ),
  'published'
),
(
  '30000000-0000-0000-0000-000000000003',
  'Hoanib Skeleton Coast',
  'hoanib-skeleton-coast',
  '25000000-0000-0000-0000-000000000002',
  'Where the desert meets the ocean. Encounter desert elephants, lions, and brown hyenas in one of Africa''s most remote wilderness areas.',
  '8 Twin Tents',
  19055.00,
  'ZAR',
  16,
  4,
  JSON_OBJECT(
    'country', 'Namibia',
    'region', 'Skeleton Coast',
    'coordinates', JSON_OBJECT('lat', -19.7456, 'lng', 13.2134),
    'altitude', '200m',
    'nearest_town', 'Purros (80km)'
  ),
  'published'
),
(
  '30000000-0000-0000-0000-000000000004',
  'Little Kulala',
  'little-kulala',
  '25000000-0000-0000-0000-000000000003',
  'Gateway to the iconic red dunes of Sossusvlei. This luxury lodge offers star-gazing, hot air ballooning, and sunrise dune excursions.',
  '11 Desert Villas',
  16260.00,
  'ZAR',
  22,
  2,
  JSON_OBJECT(
    'country', 'Namibia',
    'region', 'Namib Desert',
    'coordinates', JSON_OBJECT('lat', -24.7593, 'lng', 15.2946),
    'altitude', '900m',
    'nearest_town', 'Sesriem (30km)'
  ),
  'published'
);

-- ============================================================================
-- CAMP_FEATURES (Key highlights for listing page)
-- ============================================================================
INSERT INTO camp_features (id, camp_id, label, display_order) VALUES
-- Doro Nawas
('31000001-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', 'Desert-adapted elephant tracking', 1),
('31000001-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', 'Ancient rock art sites', 2),
('31000001-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000001', 'Panoramic valley views', 3),
('31000001-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000001', 'Hot air balloon safaris', 4),

-- Damaraland Camp
('31000002-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', 'Black rhino conservation area', 1),
('31000002-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000002', 'Desert-adapted wildlife', 2),
('31000002-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000002', 'Cultural village visits', 3),
('31000002-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000002', 'Geological expeditions', 4),

-- Hoanib Skeleton Coast
('31000003-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', 'Desert lions and elephants', 1),
('31000003-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000003', 'Skeleton Coast expeditions', 2),
('31000003-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000003', 'Seal colonies at Cape Cross', 3),
('31000003-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000003', 'Remote wilderness location', 4),

-- Little Kulala
('31000004-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', 'Sossusvlei dune access', 1),
('31000004-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000004', 'Hot air balloon flights', 2),
('31000004-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000004', 'Star gazing platform', 3),
('31000004-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000004', 'Private plunge pools', 4);

-- ============================================================================
-- EXPERIENCES (6 Shared Nature Experiences)
-- ============================================================================
INSERT INTO experiences (id, title, subtitle, description, long_description, image_url, duration, difficulty, best_time, highlights, status) VALUES
(
  '35000000-0000-0000-0000-000000000001',
  'Nature Drives',
  'Desert Wildlife Encounters',
  'Get close to rare wildlife, explore otherworldly landscapes and immerse yourself in uncharted territory on a nature drive through Namibia''s pristine wilderness.',
  'Experience the thrill of tracking desert-adapted elephants, black rhinos, and other wildlife in their natural habitat. Our expert guides navigate ancient riverbeds and dramatic landscapes, sharing intimate knowledge of animal behavior and desert survival strategies.',
  '/images/experiences/Wilderness-Doro-Nawas_1.jpg',
  '3-4 hours',
  'Easy to Moderate',
  'Early morning & late afternoon',
  JSON_ARRAY(
    'Desert-adapted elephant tracking',
    'Black rhino conservation encounters',
    'Geological formation exploration',
    'Ancient riverbed navigation'
  ),
  'published'
),
(
  '35000000-0000-0000-0000-000000000002',
  'Skeleton Coast Expeditions',
  'Where Desert Meets Ocean',
  'Explore the dramatic Skeleton Coast where the ancient Namib Desert meets the wild Atlantic Ocean, discovering shipwrecks and massive seal colonies.',
  'Journey to one of the world''s most remote coastlines, where powerful ocean currents have claimed countless vessels. Witness Cape fur seals in their thousands at Cape Cross, explore shipwreck sites, and marvel at the stark beauty of this untamed wilderness.',
  '/images/experiences/1758191665162oevans-1636.jpg',
  'Full day',
  'Easy',
  'Year-round',
  JSON_ARRAY(
    'Cape Cross seal colony (200,000+ seals)',
    'Historic shipwreck sites',
    'Dramatic coastal landscapes',
    'Marine wildlife observation'
  ),
  'published'
),
(
  '35000000-0000-0000-0000-000000000003',
  'Sossusvlei Dune Adventures',
  'Ancient Sand Seas',
  'Scale the world''s highest sand dunes in the heart of the Namib Desert, witnessing sunrise over landscapes unchanged for millions of years.',
  'Climb the iconic red dunes of Sossusvlei, including the famous Big Daddy and Dune 45. Experience the ethereal beauty of Dead Vlei''s ancient camel thorn trees, perfectly preserved by the desert''s dry climate for over 600 years.',
  '/images/experiences/doronawas_02-19-27e.jpg',
  'Full day',
  'Moderate to Challenging',
  'Sunrise',
  JSON_ARRAY(
    'Big Daddy dune climbing',
    'Dead Vlei ancient trees',
    'Sunrise photography',
    'Sand sea exploration'
  ),
  'published'
),
(
  '35000000-0000-0000-0000-000000000004',
  'Hot Air Balloon Safaris',
  'Aerial Desert Perspectives',
  'Float silently over the ancient Namib Desert for unparalleled aerial views of this moonlike landscape, followed by a champagne breakfast in the wilderness.',
  'Rise with the sun for a magical hot air balloon journey over the world''s oldest desert. Drift silently above red dunes, ancient riverbeds, and desert plains while spotting wildlife from a unique vantage point. Land for a champagne breakfast in the wilderness.',
  '/images/experiences/Wilderness-Doro-Nawas_2.jpg',
  'Half day',
  'Easy',
  'Early morning',
  JSON_ARRAY(
    'Silent flight over desert',
    'Aerial wildlife viewing',
    'Champagne breakfast',
    'Sunrise desert vistas'
  ),
  'published'
),
(
  '35000000-0000-0000-0000-000000000005',
  'Cultural Nature Walks',
  'Living Heritage Encounters',
  'Walk with Himba communities through their ancestral lands, learning traditional tracking skills and desert survival techniques passed down through generations.',
  'Join Himba guides for authentic cultural exchanges in their natural environment. Learn traditional plant uses, animal tracking, and survival skills while supporting community-based conservation efforts in this pristine wilderness.',
  '/images/experiences/Wilderness-Doro-Nawas_2.jpg',
  'Half day',
  'Easy',
  'Morning or afternoon',
  JSON_ARRAY(
    'Traditional tracking skills',
    'Medicinal plant knowledge',
    'Cultural exchange',
    'Community conservation support'
  ),
  'published'
),
(
  '35000000-0000-0000-0000-000000000006',
  'Geological Expeditions',
  'Ancient Earth Stories',
  'Explore Namibia''s fascinating geological heritage, from petrified forests to dramatic mountain formations that tell Earth''s ancient stories.',
  'Discover the Petrified Forest with trees over 280 million years old, explore the Burnt Mountain''s colorful mineral deposits, and marvel at the Organ Pipes'' geometric basalt columns. Each site reveals chapters of Earth''s geological history.',
  '/images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg',
  'Half day',
  'Easy to Moderate',
  'Morning or afternoon',
  JSON_ARRAY(
    '280-million-year-old petrified trees',
    'Burnt Mountain mineral formations',
    'Organ Pipes basalt columns',
    'Geological history interpretation'
  ),
  'published'
);

-- ============================================================================
-- CAMP_EXPERIENCES (Which camps offer which experiences)
-- ============================================================================
INSERT INTO camp_experiences (id, camp_id, experience_id, display_order) VALUES
-- Doro Nawas
('36000001-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '35000000-0000-0000-0000-000000000001', 1), -- Nature Drives
('36000001-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '35000000-0000-0000-0000-000000000004', 2), -- Hot Air Balloons
('36000001-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000001', '35000000-0000-0000-0000-000000000006', 3), -- Geological

-- Damaraland Camp
('36000002-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '35000000-0000-0000-0000-000000000001', 1), -- Nature Drives
('36000002-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000002', '35000000-0000-0000-0000-000000000005', 2), -- Cultural Walks
('36000002-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000002', '35000000-0000-0000-0000-000000000006', 3), -- Geological

-- Hoanib Skeleton Coast
('36000003-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '35000000-0000-0000-0000-000000000001', 1), -- Nature Drives
('36000003-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000003', '35000000-0000-0000-0000-000000000002', 2), -- Skeleton Coast
('36000003-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000003', '35000000-0000-0000-0000-000000000005', 3), -- Cultural Walks

-- Little Kulala
('36000004-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '35000000-0000-0000-0000-000000000003', 1), -- Sossusvlei Dunes
('36000004-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000004', '35000000-0000-0000-0000-000000000004', 2); -- Hot Air Balloons

-- ============================================================================
-- RATE_SEASONS (5 Periods matching your actual rate structure)
-- ============================================================================
-- Note: Using 2026 dates from your rate data

-- Green Season (Jan-Mar) - "6-Jun-26 to 31-May-26" seems like typo, assuming 6-Jan to 31-Mar
INSERT INTO rate_seasons (id, camp_id, name, start_date, end_date, priority, min_nights) VALUES
('40000001-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', 'Green Season', '2026-01-06', '2026-03-31', 4, 2),
('40000002-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', 'Green Season', '2026-01-06', '2026-03-31', 4, 2),
('40000003-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', 'Green Season', '2026-01-06', '2026-03-31', 4, 2),
('40000004-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', 'Green Season', '2026-01-06', '2026-03-31', 4, 2);

-- Shoulder Season (Apr-May)
INSERT INTO rate_seasons (id, camp_id, name, start_date, end_date, priority, min_nights) VALUES
('40000001-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', 'Shoulder Season', '2026-04-01', '2026-05-31', 3, 2),
('40000002-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000002', 'Shoulder Season', '2026-04-01', '2026-05-31', 3, 2),
('40000003-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000003', 'Shoulder Season', '2026-04-01', '2026-05-31', 3, 2),
('40000004-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000004', 'Shoulder Season', '2026-04-01', '2026-05-31', 3, 2);

-- High Season (Jun-Oct)
INSERT INTO rate_seasons (id, camp_id, name, start_date, end_date, priority, min_nights) VALUES
('40000001-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000001', 'High Season', '2026-06-01', '2026-10-31', 1, 3),
('40000002-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000002', 'High Season', '2026-06-01', '2026-10-31', 1, 3),
('40000003-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000003', 'High Season', '2026-06-01', '2026-10-31', 1, 3),
('40000004-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000004', 'High Season', '2026-06-01', '2026-10-31', 1, 3);

-- Mid Season (Nov-Dec 19)
INSERT INTO rate_seasons (id, camp_id, name, start_date, end_date, priority, min_nights) VALUES
('40000001-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000001', 'Mid Season', '2026-11-01', '2026-12-19', 2, 2),
('40000002-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000002', 'Mid Season', '2026-11-01', '2026-12-19', 2, 2),
('40000003-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000003', 'Mid Season', '2026-11-01', '2026-12-19', 2, 2),
('40000004-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000004', 'Mid Season', '2026-11-01', '2026-12-19', 2, 2);

-- Festive Season (Dec 20 - Jan 5)
INSERT INTO rate_seasons (id, camp_id, name, start_date, end_date, priority, min_nights) VALUES
('40000001-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000001', 'Festive Season', '2026-12-20', '2027-01-05', 0, 5),
('40000002-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000002', 'Festive Season', '2026-12-20', '2027-01-05', 0, 5),
('40000003-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000003', 'Festive Season', '2026-12-20', '2027-01-05', 0, 5),
('40000004-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000004', 'Festive Season', '2026-12-20', '2027-01-05', 0, 5);

-- ============================================================================
-- RATES (Real pricing from your rate data - FI rates)
-- ============================================================================

-- DORO NAWAS - FI Rates
INSERT INTO rates (id, camp_id, season_id, board_basis, currency_code, sharing_rate, single_supplement, effective_from, effective_to) VALUES
('50000001-0001-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000001', 'FI', 'ZAR', 7318.00, 2194.00, '2026-01-06', '2026-03-31'),
('50000001-0002-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000002', 'FI', 'ZAR', 8932.00, 2668.00, '2026-04-01', '2026-05-31'),
('50000001-0003-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000003', 'FI', 'ZAR', 11351.00, 3388.00, '2026-06-01', '2026-10-31'),
('50000001-0004-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000004', 'FI', 'ZAR', 9429.00, 2814.00, '2026-11-01', '2026-12-19'),
('50000001-0005-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000005', 'FI', 'ZAR', 10603.00, 3165.00, '2026-12-20', '2027-01-05');

-- DAMARALAND CAMP - FI Rates
INSERT INTO rates (id, camp_id, season_id, board_basis, currency_code, sharing_rate, single_supplement, effective_from, effective_to) VALUES
('50000002-0001-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '40000002-0000-0000-0000-000000000001', 'FI', 'ZAR', 9131.00, 2725.00, '2026-01-06', '2026-03-31'),
('50000002-0002-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '40000002-0000-0000-0000-000000000002', 'FI', 'ZAR', 12133.00, 3368.00, '2026-04-01', '2026-05-31'),
('50000002-0003-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '40000002-0000-0000-0000-000000000003', 'FI', 'ZAR', 16019.00, 4781.00, '2026-06-01', '2026-10-31'),
('50000002-0004-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '40000002-0000-0000-0000-000000000004', 'FI', 'ZAR', 11283.00, 3368.00, '2026-11-01', '2026-12-19'),
('50000002-0005-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', '40000002-0000-0000-0000-000000000005', 'FI', 'ZAR', 16019.00, 4781.00, '2026-12-20', '2027-01-05');

-- HOANIB SKELETON COAST - FI Rates
INSERT INTO rates (id, camp_id, season_id, board_basis, currency_code, sharing_rate, single_supplement, effective_from, effective_to) VALUES
('50000003-0001-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '40000003-0000-0000-0000-000000000001', 'FI', 'ZAR', 19055.00, 5688.00, '2026-01-06', '2026-03-31'),
('50000003-0002-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '40000003-0000-0000-0000-000000000002', 'FI', 'ZAR', 20655.00, 6165.00, '2026-04-01', '2026-05-31'),
('50000003-0003-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '40000003-0000-0000-0000-000000000003', 'FI', 'ZAR', 31881.00, 9516.00, '2026-06-01', '2026-10-31'),
('50000003-0004-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '40000003-0000-0000-0000-000000000004', 'FI', 'ZAR', 20659.00, 6166.00, '2026-11-01', '2026-12-19'),
('50000003-0005-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '40000003-0000-0000-0000-000000000005', 'FI', 'ZAR', 31881.00, 9516.00, '2026-12-20', '2027-01-05');

-- LITTLE KULALA - FI Rates
INSERT INTO rates (id, camp_id, season_id, board_basis, currency_code, sharing_rate, single_supplement, effective_from, effective_to) VALUES
('50000004-0001-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '40000004-0000-0000-0000-000000000001', 'FI', 'ZAR', 16260.00, 4854.00, '2026-01-06', '2026-03-31'),
('50000004-0002-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '40000004-0000-0000-0000-000000000002', 'FI', 'ZAR', 16846.00, 5028.00, '2026-04-01', '2026-05-31'),
('50000004-0003-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '40000004-0000-0000-0000-000000000003', 'FI', 'ZAR', 26747.00, 7984.00, '2026-06-01', '2026-10-31'),
('50000004-0004-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '40000004-0000-0000-0000-000000000004', 'FI', 'ZAR', 16846.00, 5028.00, '2026-11-01', '2026-12-19'),
('50000004-0005-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', '40000004-0000-0000-0000-000000000005', 'FI', 'ZAR', 26747.00, 7984.00, '2026-12-20', '2027-01-05');

-- DBB Rates for select camps (partial data from your source)
-- DORO NAWAS - DBB Rates
INSERT INTO rates (id, camp_id, season_id, board_basis, currency_code, sharing_rate, single_supplement, effective_from, effective_to) VALUES
('50000001-0001-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000001', 'DBB', 'ZAR', 4503.00, 1344.00, '2026-01-06', '2026-03-31'),
('50000001-0002-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000002', 'DBB', 'ZAR', 5804.00, 1733.00, '2026-04-01', '2026-05-31'),
('50000001-0003-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000003', 'DBB', 'ZAR', 8561.00, 2555.00, '2026-06-01', '2026-10-31'),
('50000001-0004-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000004', 'DBB', 'ZAR', 5755.00, 1718.00, '2026-11-01', '2026-12-19'),
('50000001-0005-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', '40000001-0000-0000-0000-000000000005', 'DBB', 'ZAR', 6138.00, 1832.00, '2026-12-20', '2027-01-05');

-- ============================================================================
-- CONTACTS (One per camp)
-- ============================================================================
INSERT INTO contacts (id, camp_id, location_line1, location_line2, region_text, country, email, phone, website, best_time_notes) VALUES
(
  '60000000-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000002',
  'Huab River Conservancy',
  'Damaraland',
  'Northwestern Namibia',
  'Namibia',
  'reservations@wilderness-namibia.com',
  '+264 61 274 500',
  'https://www.wilderness-safaris.com',
  'Year-round destination with peak wildlife viewing from May to October.'
),
(
  '60000000-0000-0000-0000-000000000003',
  '30000000-0000-0000-0000-000000000003',
  'Hoanib River',
  'Skeleton Coast National Park',
  'Northwestern Namibia',
  'Namibia',
  'reservations@wilderness-namibia.com',
  '+264 61 274 500',
  'https://www.wilderness-safaris.com',
  'May to December for best wildlife sightings. Minimum 4-night stay recommended.'
),
(
  '60000000-0000-0000-0000-000000000004',
  '30000000-0000-0000-0000-000000000004',
  'Sossusvlei Area',
  'Namib-Naukluft National Park',
  'Southern Namibia',
  'Namibia',
  'reservations@wilderness-namibia.com',
  '+264 61 274 500',
  'https://www.wilderness-safaris.com',
  'Excellent year-round. Sunrise dune visits are spectacular April through October.'
);

-- ============================================================================
-- SAMPLE INQUIRY
-- ============================================================================
INSERT INTO inquiries (id, camp_id, first_name, last_name, email, phone, travel_dates, guest_count, message, status, admin_notes) VALUES
(
  '70000000-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000004',
  'Sarah',
  'Mitchell',
  'sarah.mitchell@email.com',
  '+44-7789-123456',
  JSON_OBJECT(
    'checkin', '2026-09-15',
    'checkout', '2026-09-22',
    'flexible', true
  ),
  JSON_OBJECT(
    'adults', 2,
    'children', 0
  ),
  'We are planning our honeymoon and would love to experience the red dunes of Sossusvlei. Interested in hot air balloon safari and star gazing. Could you provide a quote for fully inclusive accommodation?',
  'new',
  NULL
);

-- ============================================================================
-- SAMPLE IMAGES (S3 paths from your actual app)
-- ============================================================================
INSERT INTO images (id, camp_id, experience_id, s3_key, s3_url, alt_text, category, kind, display_order) VALUES
-- Camp hero images
('80000001-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/hero.jpg', '/images/camps/doro-nawas/hero.jpg', 'Doro Nawas Camp panoramic view', 'hero', 'hero', 0),
('80000002-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', NULL, 'images/camps/damaraland/hero.jpg', '/images/camps/damaraland/hero.jpg', 'Damaraland Camp at sunset', 'hero', 'hero', 0),
('80000003-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', NULL, 'images/camps/hoanib/hero.jpg', '/images/camps/hoanib/hero.jpg', 'Hoanib Skeleton Coast Camp', 'hero', 'hero', 0),
('80000004-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000004', NULL, 'images/camps/little-kulala/hero.jpg', '/images/camps/little-kulala/hero.jpg', 'Little Kulala Desert Villa', 'hero', 'hero', 0),

-- Camp gallery images - Doro Nawas
('80000001-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/tent-exterior.jpg', '/images/camps/doro-nawas/tent-exterior.jpg', 'Luxury tent exterior', 'accommodation', 'gallery', 1),
('80000001-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/dining.jpg', '/images/camps/doro-nawas/dining.jpg', 'Outdoor dining area', 'accommodation', 'gallery', 2),
('80000001-0000-0000-0000-000000000004', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/elephants.jpg', '/images/camps/doro-nawas/elephants.jpg', 'Desert-adapted elephants', 'wildlife', 'gallery', 3),

-- Camp amenity images - Doro Nawas
('80000001-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/spa.jpg', '/images/camps/doro-nawas/spa.jpg', 'Spa facilities', 'amenity', 'gallery', 4),
('80000001-0000-0000-0000-000000000006', '30000000-0000-0000-0000-000000000001', NULL, 'images/camps/doro-nawas/pool.jpg', '/images/camps/doro-nawas/pool.jpg', 'Swimming pool with view', 'amenity', 'gallery', 5),

-- Experience images (from your actual data)
('85000001-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000001', 'images/experiences/Wilderness-Doro-Nawas_1.jpg', '/images/experiences/Wilderness-Doro-Nawas_1.jpg', 'Nature drive wildlife viewing', 'activities', 'inline', 0),
('85000002-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000002', 'images/experiences/1758191665162oevans-1636.jpg', '/images/experiences/1758191665162oevans-1636.jpg', 'Skeleton Coast shipwreck', 'landscapes', 'inline', 0),
('85000003-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000003', 'images/experiences/doronawas_02-19-27e.jpg', '/images/experiences/doronawas_02-19-27e.jpg', 'Sossusvlei red dunes', 'landscapes', 'inline', 0),
('85000004-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000004', 'images/experiences/Wilderness-Doro-Nawas_2.jpg', '/images/experiences/Wilderness-Doro-Nawas_2.jpg', 'Hot air balloon over desert', 'activities', 'inline', 0),
('85000005-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000005', 'images/experiences/Wilderness-Doro-Nawas_2.jpg', '/images/experiences/Wilderness-Doro-Nawas_2.jpg', 'Himba cultural walk', 'activities', 'inline', 0),
('85000006-0000-0000-0000-000000000001', NULL, '35000000-0000-0000-0000-000000000006', 'images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg', '/images/experiences/1758190858744doronawas-namibia07-25n-rix61.jpg', 'Geological formation', 'landscapes', 'inline', 0);

-- Update camps table with hero_image_id references
UPDATE camps SET hero_image_id = '80000001-0000-0000-0000-000000000001' WHERE id = '30000000-0000-0000-0000-000000000001';
UPDATE camps SET hero_image_id = '80000002-0000-0000-0000-000000000001' WHERE id = '30000000-0000-0000-0000-000000000002';
UPDATE camps SET hero_image_id = '80000003-0000-0000-0000-000000000001' WHERE id = '30000000-0000-0000-0000-000000000003';
UPDATE camps SET hero_image_id = '80000004-0000-0000-0000-000000000001' WHERE id = '30000000-0000-0000-0000-000000000004';

-- ============================================================================
-- CAMP_SECTIONS (Sample content blocks)
-- ============================================================================
INSERT INTO camp_sections (id, camp_id, section_type, title, body, display_order) VALUES
(
  '90000001-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000001',
  'overview',
  'About Doro Nawas',
  '<p>Perched on a hilltop in the 30,000-hectare Ongava Game Reserve, Doro Nawas offers magnificent views over a vast expanse of African bushveld. The camp provides an ideal base for exploring Damaraland''s unique desert-adapted wildlife and ancient rock art sites.</p><p>This intimate camp combines luxury and adventure, offering guests the chance to track desert elephants, visit local communities, and witness some of Namibia''s most spectacular geological formations.</p>',
  1
),
(
  '90000001-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000001',
  'accommodation_intro',
  'Luxury Tented Accommodation',
  '<p>Each of our 16 spacious tented rooms features en-suite facilities, private decks, and panoramic views of the surrounding wilderness. Designed to blend seamlessly with the environment, our accommodations offer modern comfort while maintaining an authentic safari atmosphere.</p>',
  2
),
(
  '90000003-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000003',
  'overview',
  'About Hoanib Skeleton Coast',
  '<p>Set in one of Africa''s most remote wilderness areas, Hoanib Skeleton Coast Camp offers an extraordinary safari experience where the ancient Namib Desert meets the wild Atlantic Ocean. This is one of the few places on Earth where desert-adapted lions roam alongside desert elephants.</p><p>The camp operates in partnership with local communities, ensuring that conservation efforts benefit both wildlife and people. Minimum 4-night stays allow guests to fully immerse themselves in this unique ecosystem.</p>',
  1
);

-- ============================================================================
-- ACCOMMODATION_TYPES (Sample room types)
-- ============================================================================
INSERT INTO accommodation_types (id, camp_id, name, max_occupancy, bedrooms, description, display_order) VALUES
(
  '91000001-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000001',
  'Classic Tented Room',
  2,
  1,
  'Spacious tented room with king-size or twin beds, en-suite bathroom with indoor and outdoor showers, private deck overlooking the valley.',
  1
),
(
  '91000001-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000001',
  'Family Tented Room',
  4,
  2,
  'Two interconnected tented rooms perfect for families, featuring two bathrooms and a shared deck area.',
  2
),
(
  '91000004-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000004',
  'Desert Villa',
  2,
  1,
  'Luxury villa with glass-fronted bedroom, private plunge pool, star-gazing deck, indoor and outdoor showers.',
  1
),
(
  '91000004-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000004',
  'Family Villa',
  4,
  2,
  'Two-bedroom villa with private pool, perfect for families. Each bedroom has en-suite facilities and access to shared living spaces.',
  2
);

-- ============================================================================
-- ACCOMMODATION_FEATURES
-- ============================================================================
INSERT INTO accommodation_features (id, accommodation_type_id, label, display_order) VALUES
-- Classic Tented Room features
('92000001-0000-0000-0000-000000000001', '91000001-0000-0000-0000-000000000001', 'King-size or twin beds', 1),
('92000001-0000-0000-0000-000000000002', '91000001-0000-0000-0000-000000000001', 'Indoor and outdoor showers', 2),
('92000001-0000-0000-0000-000000000003', '91000001-0000-0000-0000-000000000001', 'Private deck with views', 3),
('92000001-0000-0000-0000-000000000004', '91000001-0000-0000-0000-000000000001', 'Tea and coffee facilities', 4),
('92000001-0000-0000-0000-000000000005', '91000001-0000-0000-0000-000000000001', 'Ceiling fan', 5),

-- Desert Villa features
('92000004-0000-0000-0000-000000000001', '91000004-0000-0000-0000-000000000001', 'Private plunge pool', 1),
('92000004-0000-0000-0000-000000000002', '91000004-0000-0000-0000-000000000001', 'Glass-fronted bedroom', 2),
('92000004-0000-0000-0000-000000000003', '91000004-0000-0000-0000-000000000001', 'Star-gazing deck with daybed', 3),
('92000004-0000-0000-0000-000000000004', '91000004-0000-0000-0000-000000000001', 'Indoor and outdoor showers', 4),
('92000004-0000-0000-0000-000000000005', '91000004-0000-0000-0000-000000000001', 'Climate control', 5),
('92000004-0000-0000-0000-000000000006', '91000004-0000-0000-0000-000000000001', 'Mini bar', 6);

-- ============================================================================
-- SAMPLE ACTIVITIES (Camp-specific from detail pages)
-- ============================================================================
INSERT INTO activities (id, camp_id, title, description, duration, difficulty, display_order) VALUES
(
  '93000001-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000001',
  'Desert Elephant Tracking',
  'Join our expert guides in search of the legendary desert-adapted elephants that roam the dry riverbeds of Damaraland. Learn about their incredible adaptations and conservation efforts.',
  '3-4 hours',
  'Moderate',
  1
),
(
  '93000001-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000001',
  'Rock Art Excursion',
  'Visit ancient San rock art sites, some dating back thousands of years. Our guides provide fascinating insights into the symbolism and cultural significance.',
  '3 hours',
  'Easy',
  2
),
(
  '93000004-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000004',
  'Sunrise Dune Climb',
  'Wake before dawn to climb Big Daddy or Dune 45 and witness the spectacular sunrise over the Namib Desert. The changing colors are unforgettable.',
  'Half day',
  'Challenging',
  1
),
(
  '93000004-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000004',
  'Dead Vlei Photography',
  'Explore the surreal landscape of Dead Vlei with its ancient, skeletal camel thorn trees against the white clay pan and red dunes.',
  'Half day',
  'Moderate',
  2
);

-- ============================================================================
-- ACTIVITY_HIGHLIGHTS
-- ============================================================================
INSERT INTO activity_highlights (id, activity_id, label, display_order) VALUES
('94000001-0000-0000-0000-000000000001', '93000001-0000-0000-0000-000000000001', 'Close encounters with desert elephants', 1),
('94000001-0000-0000-0000-000000000002', '93000001-0000-0000-0000-000000000001', 'Expert tracking guides', 2),
('94000001-0000-0000-0000-000000000003', '93000001-0000-0000-0000-000000000001', 'Conservation insights', 3),

('94000004-0000-0000-0000-000000000001', '93000004-0000-0000-0000-000000000001', 'Spectacular sunrise views', 1),
('94000004-0000-0000-0000-000000000002', '93000004-0000-0000-0000-000000000001', 'World''s highest sand dunes', 2),
('94000004-0000-0000-0000-000000000003', '93000004-0000-0000-0000-000000000001', 'Photography opportunities', 3);

-- ============================================================================
-- RECORD MIGRATION
-- ============================================================================
INSERT INTO migrations (version, description) 
VALUES ('02', 'Seed data: 4 camps, 6 experiences, real rates, sample content')
ON DUPLICATE KEY UPDATE executed_at = CURRENT_TIMESTAMP;

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- View all camps with their regions
SELECT 
  c.name AS camp_name,
  c.slug,
  r.name AS region,
  c.accommodation_summary,
  c.from_price_amount,
  c.status
FROM camps c
JOIN regions r ON c.region_id = r.id
ORDER BY c.name;

-- View rate coverage per camp
SELECT 
  c.name AS camp,
  rs.name AS season,
  rs.start_date,
  rs.end_date,
  COUNT(r.id) AS rate_count
FROM camps c
JOIN rate_seasons rs ON c.id = rs.camp_id
LEFT JOIN rates r ON rs.id = r.season_id
GROUP BY c.id, rs.id
ORDER BY c.name, rs.start_date;

-- View camp-experience relationships
SELECT 
  c.name AS camp,
  COUNT(ce.experience_id) AS experience_count,
  GROUP_CONCAT(e.title ORDER BY ce.display_order SEPARATOR ', ') AS experiences
FROM camps c
LEFT JOIN camp_experiences ce ON c.id = ce.camp_id
LEFT JOIN experiences e ON ce.experience_id = e.id
GROUP BY c.id
ORDER BY c.name;

-- Check for rate gaps (should have continuous coverage)
SELECT 
  c.name AS camp,
  rs.name AS season,
  rs.end_date AS season_ends,
  LEAD(rs.start_date) OVER (PARTITION BY c.id ORDER BY rs.start_date) AS next_season_starts,
  DATEDIFF(
    LEAD(rs.start_date) OVER (PARTITION BY c.id ORDER BY rs.start_date),
    rs.end_date
  ) - 1 AS gap_days
FROM camps c
JOIN rate_seasons rs ON c.id = rs.camp_id
ORDER BY c.name, rs.start_date;

-- View all images by camp
SELECT 
  c.name AS camp,
  i.category,
  i.kind,
  COUNT(*) AS image_count
FROM camps c
LEFT JOIN images i ON c.id = i.camp_id
GROUP BY c.id, i.category, i.kind
ORDER BY c.name, i.category;

-- ============================================================================
-- SUCCESS MESSAGE
-- ============================================================================
SELECT 
  '✅ Seed data loaded successfully!' AS status,
  (SELECT COUNT(*) FROM camps) AS camps,
  (SELECT COUNT(*) FROM experiences) AS experiences,
  (SELECT COUNT(*) FROM rate_seasons) AS seasons,
  (SELECT COUNT(*) FROM rates) AS rates,
  (SELECT COUNT(*) FROM images) AS images;-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000001',
  'Huab River Valley',
  'Damaraland Region',
  'Northwestern Namibia',
  'Namibia',
  'reservations@wilderness-namibia.com',
  '+264 61 274 500',
  'https://www.wilderness-safaris.com',
  'Best visited May to November for optimal wildlife viewing and cooler temperatures.'
),
(
  '60000000