// import * as Tool from "../Tool"

export const filter = (value) => ({
	type: 'FILTER',
	value: value,
});

export const sort = (value) => ({
	type: 'SORT',
	value: value,
});
