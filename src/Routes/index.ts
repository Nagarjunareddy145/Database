import express from 'express';
import studentRoute from './student.route';
import employeeRoute from './employee.route';
import patientRoute from './patient.route';




const routes = express.Router();

 
routes.use('/', studentRoute)
routes.use('/',employeeRoute)
routes.use('/',patientRoute)

export default routes;
