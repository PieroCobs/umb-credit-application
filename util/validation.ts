import React from 'react';

export const validateIsEmail = (email: string) => {
	return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(email) ||
	/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(email) ||
	/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/i.test(email) ||
	/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/i.test(email);
};


export const validateIsNumber = (e: React.KeyboardEvent) => {
	const charCode = (e.which) ? e.which : e.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		e.preventDefault();
	}
};