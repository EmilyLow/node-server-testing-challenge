
module.exports = {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./database/test.db3",
	},
	migrations: {
		directory: "./database/migrations",
	},
	seeds: {
		directory: "./database/seeds",
  },
  //!! No idea what this does but I'm leaving it in. 
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done)
		},
	},
}