module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { crypto: false, timers: false, os: false, fs: false };
        return config;
    },
};
