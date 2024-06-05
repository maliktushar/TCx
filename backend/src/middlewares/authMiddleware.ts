import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Define a new name for the local JwtPayload interface to avoid conflicts
interface RequestWithUser extends Request {
    user?: JwtPayloadLocal;
}

// Define the locally used JwtPayload interface
interface JwtPayloadLocal {
    id: string;
    isAdmin: boolean;
}

export const protect = (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayloadLocal;
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Not authorized' });
    }
}
