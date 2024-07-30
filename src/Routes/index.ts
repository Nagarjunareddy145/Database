import express from 'express';
import languageRoute from './student.route';




const routes = express.Router();

 
routes.use('/', languageRoute)


export default routes;
