import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './router/posts.js';

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

app.get('/',(req, res) => {
    res.send('SUCCESS');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

//Tạo mongoDB 