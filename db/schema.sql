DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    calories INT,
    fiber DECIMAL,
    sodium DECIMAL,
    sugar DECIMAL,
    gluten_free BOOLEAN,
    flavor_profile TEXT,
    is_healthy BOOLEAN
);