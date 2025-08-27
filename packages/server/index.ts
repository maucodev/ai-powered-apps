import express from 'express';
import dotenv from 'dotenv';
import { chatController } from './controllers/chat.controller';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/chat', chatController.sendMessage);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
