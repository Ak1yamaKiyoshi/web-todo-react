const sqlite3 = require('sqlite3').verbose()

class DBInterface {
    constructor() {
        this.db = null;
        this.opendb();
        this.initializeDB();
    }

    opendb() {
        this.db = new sqlite3.Database('./database/database.db');
        return this.db;
    }

    initializeDB () {
        this.db.serialize(() => {
            this.db.run(`
            CREATE TABLE IF NOT EXISTS User (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                avatar BLOB,
                name TEXT,
                login TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS Password_Restoration_Codes (
                user_id INTEGER NOT NULL,
                code TEXT,
                code_deadline DATE,
                FOREIGN KEY(user_id) REFERENCES User(id)
            );

            CREATE TABLE IF NOT EXISTS Category (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                description TEXT,
                name TEXT
            );

            CREATE TABLE IF NOT EXISTS Task (
                task_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                user_id INTEGER NOT NULL,
                comment TEXT,
                deadline DATE,
                status BOOLEAN,
                hide BOOLEAN,
                category_id INTEGER,
                FOREIGN KEY(user_id) REFERENCES User(id),
                FOREIGN KEY(category_id) REFERENCES Category(id)
            );
            `);
        });
    }


    checkCredentials(login, password, callback) {
        this.opendb();
        let sql = `SELECT id FROM User WHERE login = ? AND password = ?`;
        return new Promise((resolve, reject) => {
            this.db.get(sql, [login, password], (err, row) => {
                if (err) reject(err);
                else if (row) resolve(row.id);
                else resolve(null);
            });
        });
    }

    getAllUsers(callback) {
        let sql = `SELECT * FROM User`;
        this.db.all(sql, [], (err, rows) => {
            if (err) return callback(err);
            return callback(null, rows);
        });
    }

    createUser(login, password, email, name, avatar, callback) {
        let sql = `INSERT INTO User(login, password, email, name, avatar) VALUES(?, ?, ?, ?, ?)`;
        this.db.run(sql, [login, password, email, name, avatar], function(err) {
            if (err) return callback(err);
            return callback(null, this.lastID);
        });
    }

    createTask(user_id, comment, deadline, status, hide, category_id, callback) {
        let sql = `INSERT INTO Task(user_id, comment, deadline, status, hide, category_id) VALUES(?, ?, ?, ?, ?, ?)`;
        this.db.run(sql, [user_id, comment, deadline, status, hide, category_id], function(err) {
            if (err) return callback(err);
            return callback(null, this.lastID);
        });
    }

    editTask(task_id, user_id, comment, deadline, status, hide, category_id, callback) {
        let sql = `UPDATE Task SET user_id = ?, comment = ?, deadline = ?, status = ?, hide = ?, category_id = ? WHERE task_id = ?`;
        this.db.run(sql, [user_id, comment, deadline, status, hide, category_id, task_id], function(err) {
            if (err) return callback(err);
            return callback(null);
        });
    }

    deleteTask(task_id, callback) {
        let sql = `DELETE FROM Task WHERE task_id = ?`;
        this.db.run(sql, [task_id], function(err) {
            if (err) return callback(err);
            return callback(null);
        });
    }

    getAllTasks(callback) {
        let sql = `SELECT * FROM Task`;
        this.db.all(sql, [], (err, rows) => {
            if (err) return callback(err);
            return callback(null, rows);
        });
    }
}

module.exports = DBInterface;