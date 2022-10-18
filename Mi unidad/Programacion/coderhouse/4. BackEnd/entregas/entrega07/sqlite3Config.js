const sqliteConfig = {
    client:"sqlite3",
    connection: {
        filename: "./DBsqlite/mensajes.sqlite3"
    },
    useNullAsDefault: true
}

export default sqliteConfig;

