<?php require '../header.php'; ?>
<script src='https://www.google.com/recaptcha/api.js'></script>
<div class="mainform">
	<form action="controller.php" method="POST">
		<input type="text" name="Fname" placeholder="Имя">
		<input type="text" name="Tname" placeholder="Отчество">
		<input type="text" name="Sname" placeholder="Фамилия">
		<input type="number" name="Tele" placeholder="+7 (123) 456-78-90" style="-webkit-appearance: none;">
		<textarea placeholder="Отзыв"></textarea>
		<div class="g-recaptcha" data-sitekey="6LdIlJ0UAAAAAEHxRjaqEpPjhVugtQYH8wTevcIu"></div>
		<input type="submit" value="Оставить отзыв" style="resize: none;">
	</form>
</div>
<?php require '../footer.php';  ?>
