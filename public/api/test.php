<?php
    $foo = "test";
    $bar = "is initiated";

    echo $foos . $bar;
    

    $arr = ["first" => "Jack",
    "last" => "Folz",
    "year" => "2021"];

    foreach($arr as $key=>$val){
        echo "<ul>";
        echo "<li>".$key . " is " .$val. "</li>";
        echo "</ul>";
    }


    echo json_encode($arr, JSON_PRETTY_PRINT);
            