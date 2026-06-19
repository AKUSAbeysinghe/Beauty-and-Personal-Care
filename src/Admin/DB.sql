-- =============================================
-- DROP EXISTING DATABASE AND RECREATE FRESH
-- Beauty and Skin Care Database
-- =============================================

-- Drop the database if it already exists
DROP DATABASE IF EXISTS skincare_db;

-- Create the database
CREATE DATABASE skincare_db 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

-- Use the newly created database
USE skincare_db;

-- =============================================
-- TABLES
-- =============================================

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category_slug (slug)
);

-- 2. Subcategories Table
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_category_id (category_id),
    INDEX idx_subcategory_slug (slug)
);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id),
    INDEX idx_subcategory (sub_category_id),
    INDEX idx_popular (popular),
    INDEX idx_status (status)
);

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================
INSERT INTO categories (name, slug, description) VALUES
('Salons & Spas', 'salons-spas', 'Indulge in luxurious spa treatments and rejuvenating beauty services'),
('Cosmetics Retail', 'cosmetics-retail', 'Shop premium beauty products from top brands like Sephora and Ulta Beauty'),
('Barbershops & Grooming', 'barbershops-grooming', 'Expert grooming services for the modern gentleman with style and precision')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Salons & Spas
(1, 'Beauty Salons', 'beauty-salons', 'Expert beauty treatments for hair, nails, and more.'),
(1, 'Spas', 'spas', 'Therapeutic treatments to rejuvenate body and mind.'),
(1, 'Facials & Skincare', 'facials-skincare', 'Personalized facials to enhance your skin’s glow.'),
(1, 'Massage Therapy', 'massage-therapy', 'Relaxing and restorative massage therapies.'),

-- Cosmetics Retail
(2, 'General Cosmetics', 'general-cosmetics', 'Shop a wide range of high-quality beauty products for all your needs.'),
(2, 'Sephora Brands', 'sephora-brands', 'Discover Sephora’s exclusive range of makeup and skincare products.'),
(2, 'Ulta Beauty Products', 'ulta-beauty-products', 'Explore Ulta Beauty’s premium product lines for all your beauty needs.'),
(2, 'Makeup & Skincare', 'makeup-skincare', 'High-performance makeup and skincare for a radiant look.'),

-- Barbershops & Grooming
(3, 'Barbershops', 'barbershops', 'Professional barbering services focusing on precision cuts and classic styles.'),
(3, 'Grooming Services', 'grooming-services', 'Luxurious grooming services for a refined appearance.'),
(3, 'Haircuts & Styling', 'haircuts-styling', 'Modern and classic haircuts tailored to your preferences.'),
(3, 'Beard Grooming', 'beard-grooming', 'Professional beard care for a refined appearance.')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- SUCCESS MESSAGE
-- =============================================
SELECT '✅ Database skincare_db has been successfully dropped and recreated!' AS message;





ALTER TABLE subcategories
ADD COLUMN image_url VARCHAR(255) NULL;