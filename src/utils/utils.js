function getGreetingAndTime() {
	const now = new Date();

	const hours = now.getHours();

	let greeting;
	if (hours >= 5 && hours < 12) {
		greeting = 'Good Morning';
	} else if (hours >= 12 && hours < 18) {
		greeting = 'Good Afternoon';
	} else {
		greeting = 'Good Evening';
	}

	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	const formattedDate = now.toLocaleDateString('en-US', options);

	return { greeting, formattedDate };
}

export { getGreetingAndTime };
