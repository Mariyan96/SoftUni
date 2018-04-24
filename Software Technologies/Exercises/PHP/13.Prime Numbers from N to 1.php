<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />

    <input type= "submit"/>
</form>
<?php
if(isset($_GET['num']))
{
    $num = intval($_GET['num']);
    $isPrime = true;
    for ($k=$num;$k>=1;$k--) {
        for ($i = 2; $i <= sqrt($k); $i++) {
            if ($k % $i == 0) {
                $isPrime = false;
            }
        }
        if ($isPrime)
        {
            echo "$k ";
        }
        $isPrime=true;
    }

}
?>
</body>
</html>