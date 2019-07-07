import passport from 'passport';

class PassportConfig {
    public passport: any;
    constructor() {
        this.config();
        this.passport = passport;
    }

    private config(): void {
        // passport.use();
    }

}

export const passportConfig = new PassportConfig().passport;
