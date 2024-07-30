// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Student from '../db/models/student';

const studentRoute = express.Router();

studentRoute.use(express.json());

studentRoute.get('/stu', async (req: Request, res: Response) => {
  try {
    const student = await Student.findAll();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

studentRoute.post('/std', async (req: Request, res: Response) => {
  const {id, sname, course} = req.body;

  try {
    const newStudent = await Student.create({id, sname, course});
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});







export default studentRoute;
