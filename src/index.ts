import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { userRouter } from './users/infrastructure/UserRouter';
import { authRouter } from './auth/infrastructure/AuthRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.log(err.stack);
    return res.status(500).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
});
