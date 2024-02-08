import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: Function) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
        ;
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
        return next();
        
        req.user_id = sub;

    } catch (err) {
        return res.status(401).end();
    }

}