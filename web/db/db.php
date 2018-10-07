<?php
//https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-php
class Conectar
{
    public static function conexion()
    {
        $db = parse_url(getenv("DATABASE_URL"));
        $db["path"] = ltrim($db["path"], "/");
        //Connecting with the pgsql extension
        $conn = pg_connect(getenv("DATABASE_URL"));

        $db = parse_url(getenv("DATABASE_URL"));

        $pdo = new PDO("pgsql:" . sprintf(
            "host=%s;port=%s;user=%s;password=%s;dbname=%s",
            $db["ec2-23-21-171-249.compute-1.amazonaws.com"],
            $db["5432"],
            $db["kqpnuyfjwfkdey"],
            $db["bdfb94a5fbaf03bad12044103eb276365d1d48497eb1608745f40e607a3aeba8"],
            ltrim($db["path"], "/")
        ));
    }
    public static function close_conexion(){
        $pdo = null;
    }
}
?>
