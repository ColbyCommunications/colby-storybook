const autoprefixer = require('autoprefixer');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: () => [autoprefixer()],
    },
};

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    {
                        test: /\.css$/,
                        oneOf: [
                            {
                                resourceQuery: /^\?raw$/,
                                use: ['style-loader', 'css-loader'],
                            },
                            {
                                loaders: [
                                    'style-loader',
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            modules: true,
                                            importLoaders: 2,
                                        },
                                    },
                                    postcssLoader,
                                    'sass-loader',
                                ],
                            },
                        ],
                    },
                    {
                        test: /\.less$/,
                        loaders: ['style-loader', 'css-loader', postcssLoader, 'less-loader'],
                    },
                    {
                        test: /\.scss$/,
                        loaders: ['style-loader', 'css-loader', postcssLoader, 'sass-loader'],
                    },
                    {
                        test: /\.(jpg|png|gif|svg)$/,
                        loaders: {
                            loader: 'url-loader',
                            options: {
                                limit: 5000,
                                name: '[name]-[hash].[ext]',
                            },
                        },
                    },
                    {
                        test: /\.(ttf|eot|woff|woff2|mp3)$/,
                        loaders: ['file-loader'],
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                babelrc: false,
                                presets: [
                                    require.resolve('@colbycommunications/babel-preset-colby'),
                                ],
                            },
                        },
                    },
                ],
            },
        };
    },
};
