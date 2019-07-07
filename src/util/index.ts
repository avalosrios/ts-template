export const isProdEnv: boolean = (
    () => process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
)();
