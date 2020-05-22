const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.get('/api/customers', (req, res) => {
	const customers = [
		{ id: 1, firstName: 'Aviansh', lastName: 'Mahawar' },
		{ id: 2, firstName: 'Aviansh', lastName: 'Mahawar' },
		{ id: 3, firstName: 'Aviansh', lastName: 'Mahawar' },
	];
	res.json(customers);
});
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on port ${port}`));
