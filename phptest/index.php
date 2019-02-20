<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>ใส่ชื่อเว็บ</title> <!-- ชื่อด้านบน -->
    <link rel="stylesheet" type="text/css" href="styles.css"
  </head>

  <body>
    <div class="middle">

	    <div class="header"> <!-- หัว -->

        <?php
        $text = file('title.txt');
        foreach($text as $index=>$value){
        	echo $value."<br />";
        }
        ?>

	    </div>

      <div class="navi">
        <a href="index.html" class="navlink">Home</a>
        <a href="link2.html" class="navlink">Link 2</a>
        <a href="link3.html" class="navlink">Link 3</a>
        <a href="link4.html" class="navlink">Link 4</a>
      </div>

      <div class="contents"> <!--ตัว -->

contents naja

      </div>

    </div>
    <div class="footer"> <!-- เครดิต -->
© 2019 อีปอ
    </div>
  </body>

</html>
