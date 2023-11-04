const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
	console.log(`EM-Respond Server listening on port ${port}`);
});