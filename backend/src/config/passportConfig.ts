const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { ExtractJwt } = require("passport-jwt");
const User = require("../models/User");
const dotenv = require("dotenv");

interface JwtPayload {
    email: string;
}

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    };

module.exports = (passport: any) => {
    passport.use(
        new JwtStrategy(opts, async (payload: JwtPayload, done: any) => {
            try {
                const user = await User.findOne({ email: payload.email });
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (err) {
                console.error(err);
            }
        }
    ));

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
                clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
                callbackURL: "/login",
                passReqToCallback: true
            },
            async (request: any, accessToken: string, refreshToken: string, profile: any, done: any) => {
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        ));

    passport.use(new LinkedInStrategy({
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: process.env.LINKEDIN_CALLBACK_URL,
        scope: ['r_emailaddress', 'r_liteprofile'],
        state: true,
        passReqToCallback: true
    },
    async (request: any, accessToken: string, refreshToken: string, profile: any, done: any) => {
        try {
            const user = await User.findOne({ email: profile.emails[0].value });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            console.error(err);
        }
    }
    ));
}