<?php

// fájl elérési út
$jsonPath = "../json/user.json";

$json = file_get_contents("php://input");
$json = json_decode($json);

// Beolvassuk a user.json fájlt
$user = file_get_contents($jsonPath);
$user = json_decode($user);

$user[$json->index] = $json->row; // json tömbbél kiolvasom az indexet. Az ilyen indexű elemet írom felül a user-ben. Amivel felülírom az a json tömb row eleme.

// Visszaírjuk
file_put_contents($jsonPath, json_encode($user));

//nyugtázzuk
echo "success";

?>