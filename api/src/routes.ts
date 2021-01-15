import express from 'express';

const Routes = express.Router();

Routes.get('/', (req, res) => {
  return res.send('ola')
}) 

export default Routes;