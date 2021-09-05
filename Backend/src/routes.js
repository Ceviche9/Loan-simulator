/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { Router } from 'express';

import { LoanController } from './app/Controller/LoanController';

// Controllers
const loanController = new LoanController();

const routes = Router();

// Loan
routes.get('/database', loanController.index);
routes.post('/loan', loanController.store);

export { routes };
