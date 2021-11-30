import { Response } from 'express';

const badRequest = (res: Response) => res.status(400).json({
  status: 'bad_request',
});

const internalServerError = (res: Response) => res.status(500).json({
  status: 'internal_server_error',
});

export default { badRequest, internalServerError };
