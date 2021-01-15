import express from 'express';
import Routes from './routes';
import path from 'path'

const App = express();

App.use(express.json())
App.use(Routes);
App.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))



App.listen(3333)