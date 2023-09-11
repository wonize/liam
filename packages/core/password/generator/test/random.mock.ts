let indexes = [
	0.09, 0.19, 0.29, 0.39, 0.49, 0.59, 0.69, 0.79, 0.89, 0.99, 0.119, 0.129,
	0.139, 0.149, 0.159, 0.169, 0.179, 0.189, 0.199, 0.219,
];

const createRandomMock = () => {
	let index = -1;
	const getRandomMock = (): number => {
		return indexes[++index] ?? 0.09;
	};
	return getRandomMock;
};

export { createRandomMock };
