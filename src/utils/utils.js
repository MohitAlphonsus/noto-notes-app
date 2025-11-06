const toDate = input => (input instanceof Date ? input : new Date(input));

function getGreetingAndTime() {
	const now = new Date();
	const hours = now.getHours();

	const greeting =
		hours < 5
			? "Good Evening"
			: hours < 12
			? "Good Morning"
			: hours < 18
			? "Good Afternoon"
			: "Good Evening";

	const formattedDate = now.toLocaleDateString("en-US", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return { greeting, formattedDate };
}

function formatToDate(isoDate) {
	const date = toDate(isoDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

function formatToTime(isoDate) {
	const date = toDate(isoDate);

	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12;

	const weekday = date.toLocaleString("en-US", { weekday: "long" });

	return `${hours}:${minutes}${ampm} ${weekday}`;
}

export { getGreetingAndTime, formatToDate, formatToTime };
