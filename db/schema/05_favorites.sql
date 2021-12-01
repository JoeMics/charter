DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE favorites (
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  UNIQUE (map_id, user_id)
);
