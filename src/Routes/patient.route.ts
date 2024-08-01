// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Student from '../db/models/patient';
import Employee from '../db/models/patient';
import studentRoute from './student.route';
import patient from '../db/models/patient';

const patientRoute = express.Router();

patientRoute.use(express.json());

// GET all students
patientRoute.get('/pat', async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new student
patientRoute.post('/patp', async (req: Request, res: Response) => {
  const { pid, pname, description } = req.body;

  try {
    const newPatient = await Student.create({ pid, pname, description });
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a student by their sname
patientRoute.put('/patput/:ename', async (req: Request, res: Response) => {
  const { pname } = req.params;
  const { newPname, description } = req.body;

  try {
    const PatientToUpdate = await patient.findOne({ where: { pname } });

    if (!PatientToUpdate) {
      return res.status(404).json({ error: 'patient not found' });
    }

    // Update only the fields provided
    if (newPname) PatientToUpdate.pname = newPname;
    if (description) PatientToUpdate.description = description;
    
    await PatientToUpdate.save();
    res.json(PatientToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a student by their ID
patientRoute.delete('/patdel/:pid', async (req: Request, res: Response) => {
  const { pid } = req.params;

  try {
    const patientToDelete = await patient.findByPk(pid);

    if (!patientToDelete) {
      return res.status(404).json({ error: 'patient not found' });
    }

    await patientToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default patientRoute;
