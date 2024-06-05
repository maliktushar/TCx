const express = require('express');
import { Request, Response } from 'express';
const passport = require('passport');
const router = express.Router();

// Google OAuth callback route
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req: Request, res: Response) => {
  res.redirect('/login-success');
});

// LinkedIn OAuth callback route
router.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req: Request, res: Response) => {
  res.redirect('/login-success');
});

module.exports = router;
