-- SQL SEED FOR KIWIBOT

DROP DATABASE KiwiBot;
CREATE DATABASE KiwiBot;
USE KiwiBot;

CREATE TABLE tags (
    d_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (d_name)
);

CREATE TABLE guilds (
    d_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    d_disc_id VARCHAR(100) NOT NULL,
    d_name VARCHAR(100) NOT NULL,
    d_disc_channel VARCHAR(100),
    d_enable_raw BOOLEAN NOT NULL,
    -- d_enable_reupload BOOLEAN NOT NULL,
    d_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    d_deletedAt TIMESTAMP,
    PRIMARY KEY (d_id)
);

CREATE TABLE guilds_tags (
    tag_name VARCHAR(20) NOT NULL,
    guild_id INT UNSIGNED NOT NULL,
    d_enabled BOOLEAN NOT NULL,
    FOREIGN KEY (guild_id) REFERENCES guilds(d_id),
    FOREIGN KEY (tag_name) REFERENCES tags(d_name)
);

CREATE TABLE channels (
    d_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    d_disc_id VARCHAR(100) NOT NULL,
    guild_id INT UNSIGNED NOT NULL,
    d_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    d_deletedAt TIMESTAMP,
    PRIMARY KEY (d_id),
    FOREIGN KEY (guild_id) REFERENCES guilds(d_id)
);

CREATE TABLE mangas (
    d_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    d_name VARCHAR(100) NOT NULL,
    d_url VARCHAR(300) NOT NULL,
    d_vc VARCHAR(20) NOT NULL,
    d_tag VARCHAR(20) NOT NULL,
    d_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    d_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (d_id),
    FOREIGN KEY (d_tag) REFERENCES tags(d_name)
);

CREATE TABLE guilds_mangas (
    guild_id INT UNSIGNED NOT NULL,
    manga_id INT UNSIGNED NOT NULL,
    d_added_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    d_removed_at TIMESTAMP,
    FOREIGN KEY (guild_id) REFERENCES guilds(d_id),
    FOREIGN KEY (manga_id) REFERENCES mangas(d_id)
);

INSERT INTO tags (d_name) VALUES ('new'), ('raw'), ('reupload'), ('special');