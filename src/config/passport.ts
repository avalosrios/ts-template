import passport from 'passport';
import { BasicStrategy } from 'passport-http';

class PassportConfig {
  public passport: passport.PassportStatic;

  constructor() {
    this.config();
    this.passport = passport;
  }

  private configBasicStrategy = () => {
    return new BasicStrategy(
      (key: string, secret: string, cb: (error: any, user?: any) => void) => {
        if (key === process.env.API_KEY && secret === process.env.API_SECRET) {
          return cb(undefined, { key });
        }
        return cb(undefined, undefined);
      }
    );
  };

  private config(): void {
    // NOTE: add serializeUser and deserializeUser functions when using sessions
    passport.use(this.configBasicStrategy());
  }
}

export const passportConfig = new PassportConfig().passport;
