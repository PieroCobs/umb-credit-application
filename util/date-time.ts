const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getLongDateEssentials = (dateString: Date) => {
	const d = new Date(dateString);

	const month = months[d.getMonth()];
	const dayOfWeek = days[d.getDay()];
	const dayOfMonth = d.getDate();
	const year = d.getFullYear();

	return { year, month, dayOfWeek, dayOfMonth };
};

const getTimeEssentials = (dateString: Date) => {
	const d = new Date(dateString);

	const hour = d.getHours() + 1;
	const mins = d.getMinutes();
	const secs = d.getSeconds();

	return { hour, mins, secs };
};

const getShortDateEssentials = (dateString: Date) => {
	const d = new Date(dateString);

	const month = d.getMonth();
	const dayOfMonth = d.getDate();
	const year = d.getFullYear();

	return { year, month, dayOfMonth };
};

export const formatAsShortDate = (dateString: Date) => {
	const { year, month, dayOfMonth } = getShortDateEssentials(dateString);
	const date = `${dayOfMonth}/${month}/${year}`;

	return date;
};

export const formatAsMediumDate = (dateString: Date) => {
	const { year, month, dayOfMonth } = getLongDateEssentials(dateString);
	const date = `${month} ${dayOfMonth}, ${year}`;

	return date;
};

export const formatAsLongDate = (dateString: Date) => {
	const { year, month, dayOfWeek, dayOfMonth } = getLongDateEssentials(dateString);
	const date = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;

	return date;
};

export const formatAsTime = (dateString: Date) => {
	const { hour, mins, secs } = getTimeEssentials(dateString);
	const time = `${hour}:${mins}:${secs}`;

	return time;
};

export const formatAsDateAndTime = (dateString: Date) => {
	return `${formatAsLongDate(dateString)} ${formatAsTime(dateString)}`;
};
