CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text 
    )

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
)

INSERT INTO posts (
    title,
    img,
    content,
    author_id
) VALUES (
    'Post 1 ','https://robohash.org/edo','This is content for post 1', 11
), (
    'Post 2 ','https://robohash.org/tere','This is content for post 2', 7
),
 (
    'Post 3 ','https://robohash.org/tere','This is content for post 3', 7
)