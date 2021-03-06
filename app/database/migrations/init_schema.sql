CREATE TABLE IF NOT EXISTS replies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_hash CHAR(36) NOT NULL,
    survey_id INT NOT NULL,
    statement_id INT NOT NULL,
    value INT NULL DEFAULT NULL,
    value_text VARCHAR(250) NULL DEFAULT NULL,
    created_at TIMESTAMP NOT NULL
);