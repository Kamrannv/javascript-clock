function setDate(){

	const now = new Date();

	const seconds = now.getSeconds();
	const secondDegree =((seconds / 60)*360) + 90;
	const secondOne = document.querySelector('.second-one');
	secondOne.style.transform = `rotate(${secondDegree}deg)`;

	const min = now.getMinutes();
	const minDegree = ((min / 60)*360) + 90;
	const minOne = document.querySelector('.min-one');
	minOne.style.transform = `rotate(${minDegree}deg)`;
	
	const hour = now.getHours();
	const hourDegree = ((min / 12)*360) + 90;
	const hourOne = document.querySelector('.hour-one');
	hourOne.style.transform = `rotate(${hourDegree}deg)`;
	
	
}

setInterval(setDate, 1000);