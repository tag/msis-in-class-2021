<?php

$num = 2;
$foo = $num . " be";
$bar = "or not " .$num ." be.";

echo $foo ." ". $bar;

echo "\n";

echo $num * $num * $num;

$arr = [1,1,2,3,5,8];

$arr2 = [
  "first"  => "Tom",
  "second" => "Bipin",
  "best"   => "DS"
];

if (true) {
    echo "TRUE \n";
} else {
    echo "FALSE \n";
}

while (true) {
    break;
}

echo "<ul>";
foreach ($arr2 as $key => $val) {
    echo "<li>".$key." is ".$val."</li>\n";
}
echo "</ul>";

// $arr as json

// echo json_encode($arr);

echo json_encode(
    $arr2,
    JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);



