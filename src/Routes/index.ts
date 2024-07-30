import express from 'express';
import studentRoute from './student.route';




const routes = express.Router();

 
routes.use('/', studentRoute)


export default routes;
