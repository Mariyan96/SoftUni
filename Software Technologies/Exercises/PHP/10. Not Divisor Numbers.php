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
    $num1 = intval($_GET['num']);

    for($i=$num1;$i>=1;$i--)
    {
        if($num1%$i!=0)
        {
            echo "$i\n";
        }
    }

}
?>
</body>
</html>