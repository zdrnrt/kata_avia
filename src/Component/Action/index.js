export const filterSet = (value) => {console.log('FILTER', value); return { type: 'FILTER', payload: value }};
export const sortSet = (value) => {console.log('SORT', value); return { type: 'SORT', payload: value }};
