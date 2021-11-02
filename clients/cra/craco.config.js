/* eslint-disable @typescript-eslint/no-var-requires */
const CracoLessPlugin = require("craco-less");

module.exports = {
    webpack: {
        plugins: [
            {
                plugin: CracoLessPlugin,
                options: {
                    lessLoaderOptions: {
                        lessOptions: {
                            modifyVars: {},
                            javascriptEnabled: true,
                        },
                    },
                },
            },
        ],
    },
};
