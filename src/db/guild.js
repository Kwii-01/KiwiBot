const db = require("./pool").pool;

//param: val = {d_disc_id: "1564712686183", d_name: "SUPERDISCORD", d_disc_channel: "98727815726512" }
const insert = function(val) {
    var sql = 'INSERT INTO guilds SET ?';
    db.query(sql, val, function(error, results, fields) {
        if (error) {
            print("ERR: guild.js INSERT =>" + error.name + ": " + error.sqlMessage);
            throw error;
        }
    });
}

const update = function(id, val) {
    var sql = 'UPDATE guilds SET ? WHERE `d_id`= ?';
    db.query(sql, [val, id], function(error, results, fields) {
        if (error) {
            print("ERR: guild.js UPDATE =>" + error.name + ": " + error.sqlMessage);
            throw error;
        }
    });
}

const select = function(id, callback) {
    var sql = 'SELECT * FROM guilds WHERE `id` = ?';
    db.query(sql, id, callback);
}

const getMangas = function(guild_id, callback) {
    var sql = 'SELECT `m.d_id`, `m.d_name`, `m.d_vc` FROM guilds g \
    INNER JOIN guilds_mangas gm ON `g.d_id` = `gm.guild_id` \
    INNER JOIN mangas m ON `gm.manga_id` = `m.d_id` \
    WHERE `g.d_disc_id` = ? AND `gm.d_removed_at` IS NULL';
    db.query(sql, guild_id, callback);
}

// const 

module.exports = {
    insert,
    update,
    select,
    getMangas
}