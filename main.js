const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35e2e8e49fmsh8ec08757228c66fp1a054bjsna3d86f42c8fb',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

async function fetchData() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};

console.log(fetchData());