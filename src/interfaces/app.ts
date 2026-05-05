import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controllers/UserController';

const app = express();
app.use(bodyParser.json());

const userController = new UserController();

app.post('/users', (req, res) => userController.createUser(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
