DROP TABLE IF EXISTS boss;

CREATE TABLE boss(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)
);

DROP TABLE IF EXISTS news;

CREATE TABLE news(
    id SERIAL PRIMARY KEY,
    news TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES boss(id)
);

-- INSERT INTO news (news) VALUES ('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');

DROP TABLE IF EXISTS parents;

CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    catname VARCHAR(255) NOT NULL,
    picture VARCHAR NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO parents(catname, picture) VALUES ('Mui', 'client\src\components\cats\images\LMZP0048.JPG');