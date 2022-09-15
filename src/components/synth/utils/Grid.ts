export const makeGrid = () => {
	const rows = [];
	const notes = ['C4', 'B3', 'A3', 'G3', 'F3', 'E3', 'D3', 'C3'];
	let counter = 0;
	for (let note in notes) {
		const row = [];
		for (let i = 0; i < 32; i++) {
			row.push({
				note: notes[note],
				isActive: false,
				id: counter
			});
			counter++;
		}
		rows.push(row);
	}

	return rows;
};
