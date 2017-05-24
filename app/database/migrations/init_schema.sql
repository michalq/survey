CREATE TABLE IF NOT EXISTS replies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_hash CHAR(128) NOT NULL,
    survey_id INT NOT NULL,
    statement_id INT NOT NULL,
    value INT NOT NULL,
    created_at TIMESTAMP NOT NULL
);