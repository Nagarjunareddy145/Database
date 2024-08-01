// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Student from '../db/models/employee';
import Employee from '../db/models/employee';
import studentRoute from './student.route';

const employeeRoute = express.Router();

employeeRoute.use(express.json());

// GET all students
employeeRoute.get('/emp', async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new student
employeeRoute.post('/empe', async (req: Request, res: Response) => {
  const { eid, ename, job } = req.body;

  try {
    const newEmployee = await Student.create({ eid, ename, job });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a student by their sname
employeeRoute.put('/empput/:ename', async (req: Request, res: Response) => {
  const { ename } = req.params;
  const { newEname, job } = req.body;

  try {
    const EmployeeToUpdate = await Employee.findOne({ where: { ename } });

    if (!EmployeeToUpdate) {
      return res.status(404).json({ error: 'employee not found' });
    }

    // Update only the fields provided
    if (newEname) EmployeeToUpdate.ename = newEname;
    if (job) EmployeeToUpdate.job =job;
    
    await EmployeeToUpdate.save();
    res.json(EmployeeToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a student by their ID
employeeRoute.delete('/empdel/:eid', async (req: Request, res: Response) => {
  const { eid } = req.params;

  try {
    const employeeToDelete = await Employee.findByPk(eid);

    if (!employeeToDelete) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employeeToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default employeeRoute;
