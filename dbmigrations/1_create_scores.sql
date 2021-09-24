DROP TABLE IF EXISTS scores;

CREATE TABLE scores (
    id serial PRIMARY KEY,
    username varchar(30) NOT NULL,
    category varchar(30) NOT NULL,
    score int NOT NULL
);