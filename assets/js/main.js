window.onload = () => {
	AOS.init({
		duration: 1500
	});
	new CircleType(document.getElementById('curved'))
			.radius(300);


	let openButton = document.querySelector('.bubbly-button');
	openButton.onclick = () => {
		document.getElementById("music").play();
		document.querySelector('.welcome-page').style.opacity = '0';
		document.querySelector('.welcome-page').style.visibility = 'hidden';
	}
}