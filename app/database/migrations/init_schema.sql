CREATE TABLE IF NOT EXISTS replies (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    survey_id INT NOT NULL,
    statement_id INT NOT NULL,
    value INT NOT NULL,
    created_at TIMESTAMP NOT NULL
);