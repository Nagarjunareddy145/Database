// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Student from '../db/models/student';

const studentRoute = express.Router();

studentRoute.use(express.json());

// GET all students
studentRoute.get('/stu', async (req: Request, res: Response) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new student
studentRoute.post('/std', async (req: Request, res: Response) => {
  const { id, sname, course } = req.body;

  try {
    const newStudent = await Student.create({ id, sname, course });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a student by their sname
studentRoute.put('/stuput/:sname', async (req: Request, res: Response) => {
  const { sname } = req.params;
  const { newSname, course } = req.body;

  try {
    const studentToUpdate = await Student.findOne({ where: { sname } });

    if (!studentToUpdate) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update only the fields provided
    if (newSname) studentToUpdate.sname = newSname;
    if (course) studentToUpdate.course = course;
    
    await studentToUpdate.save();
    res.json(studentToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a student by their ID
studentRoute.delete('/studel/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const studentToDelete = await Student.findByPk(id);

    if (!studentToDelete) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await studentToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default studentRoute;
