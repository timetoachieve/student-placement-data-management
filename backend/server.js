import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
