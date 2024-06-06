"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { ExtractJwt } = require("passport-jwt");
const User = require("../models/User");
const dotenv = require("dotenv");
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "Harsheet Sharma",
};
module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email: payload.email });
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        catch (err) {
            console.error(err);
        }
    })));
    passport.use(new GoogleStrategy({
        clientID: "8296593739-s8lp3sgv71rn6l95jh5sbtb8ovjb0pgl.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/login",
        passReqToCallback: true
    }, (request, accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email: profile.email });
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        catch (err) {
            console.error(err);
        }
    })));
    passport.use(new LinkedInStrategy({
        clientID: "86wzl8g6vkuobu",
        clientSecret: "WPL_AP1.yGyfRU1Fk9qjWuqk.eSnTPg==",
        callbackURL: "/login",
        scope: ['r_emailaddress', 'r_liteprofile'],
        state: true,
        passReqToCallback: true
    }, (request, accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email: profile.emails[0].value });
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        catch (err) {
            console.error(err);
        }
    })));
};
