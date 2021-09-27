<?php
    $foo = "test";
    $bar = "is initiated";

    echo $test . $bar;
    

    $arr = ["first" => "Jack",
    "last" => "Folz",
    "year" => "2021"];

    foreach($arr as $key=>$val){
        echo "<ul>";
        echo "<li>".$key . " is " .$val. "</li>";
        echo "</ul>";
    };