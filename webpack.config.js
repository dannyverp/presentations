const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        'tailwind': './src/tailwind.js',
        'index': './src/index.js',
        'reddingsbrigade/': './src/reddingsbrigade/index.js',
        'reddingsbrigade/incidenten/': './src/reddingsbrigade/incidenten/index.js',
        'reddingsbrigade/waterhulpverlening/': './src/reddingsbrigade/waterhulpverlening/index.js',
        'reddingsbrigade/waterhulpverlening/introductie/': './src/reddingsbrigade/waterhulpverlening/introductie/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/openWaterEnBeach/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/openWaterEnBeach/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/preventie/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/preventie/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/professionalisme/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/professionalisme/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/verdrinkingen/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/verdrinkingen/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/zonesEnScannen/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/zonesEnScannen/index.js',
        'reddingsbrigade/waterhulpverlening/toezichthouden/zwembad/': './src/reddingsbrigade/waterhulpverlening/toezichthouden/zwembad/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/gevaren/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/gevaren/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/waterhulpverlening/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/waterhulpverlening/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/redden/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/redden/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/reddingsmiddelen/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/reddingsmiddelen/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/grepen/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/grepen/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/speciale reddingen/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/speciale reddingen/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/eerste hulp/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/eerste hulp/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/leidinggeven/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/leidinggeven/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/psychische hulp/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/psychische hulp/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/rampen/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/rampen/index.js',
        'reddingsbrigade/waterhulpverlening/hulpverlening/communicatie/': './src/reddingsbrigade/waterhulpverlening/hulpverlening/communicatie/index.js',
    },
    mode: 'development',//change to 'development' for non minified js
    output: {
        filename: '[name]/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        // CSS to CommonJS (resolves CSS imports into exported CSS strings)
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2
                            // url: false,
                            // import: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {
                                    cssnext: {},
                                    cssnano: {},
                                    autoprefixer: {}
                                }
                            },
                            plugins: [
                                require('tailwindcss'),
                                //require('autoprefixer'),
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '/fonts'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].svg',
                    outputPath: 'images',
                    publicPath: '/images'
                }
            },
            {
                test: /\.(gif|png|jpe?g|ico|mp4)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    publicPath: '/images'
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/openWaterEnBeach/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/openWaterEnBeach/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/openWaterEnBeach/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/preventie/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/preventie/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/preventie/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/professionalisme/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/professionalisme/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/professionalisme/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/verdrinkingen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/verdrinkingen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/verdrinkingen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/zonesEnScannen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/zonesEnScannen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/zonesEnScannen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/zwembad/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/zwembad/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/zwembad/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'reddingsbrigade/waterhulpverlening - toezichthouden',
                chunks: ['reddingsbrigade/waterhulpverlening/toezichthouden/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/toezichthouden/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/toezichthouden/index.ejs',
                hash: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'reddingsbrigade/waterhulpverlening - verlenen van hulp bij een incident',
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/index.ejs',
                hash: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'reddingsbrigade/waterhulpverlening',
                chunks: ['reddingsbrigade/waterhulpverlening/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/index.ejs',
                hash: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'Introductie Waterhulpverlening',
                chunks: ['reddingsbrigade/waterhulpverlening/introductie/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/introductie/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/introductie/index.ejs',
                hash: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'Danny\'s Presentation Library',
                chunks: ['index', 'tailwind'],
                template: './src/index.ejs',
                hash: true
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/gevaren/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/gevaren/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/gevaren/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/waterhulpverlening/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/waterhulpverlening/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/waterhulpverlening/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/redden/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/redden/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/redden/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/reddingsmiddelen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/reddingsmiddelen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/reddingsmiddelen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/grepen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/grepen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/grepen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/speciale reddingen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/speciale reddingen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/speciale reddingen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/eerste hulp/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/eerste hulp/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/eerste hulp/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/leidinggeven/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/leidinggeven/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/leidinggeven/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/psychische hulp/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/psychische hulp/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/psychische hulp/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/rampen/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/rampen/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/rampen/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/waterhulpverlening/hulpverlening/communicatie/', 'tailwind'],
                filename: 'reddingsbrigade/waterhulpverlening/hulpverlening/communicatie/index.html',
                template: './src/reddingsbrigade/waterhulpverlening/hulpverlening/communicatie/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                title: "Reddingsbrigade presentaties",
                chunks: ['reddingsbrigade/', 'tailwind'],
                filename: 'reddingsbrigade/index.html',
                template: './src/reddingsbrigade/index.ejs'
            }
        ),
        new HtmlWebpackPlugin(
            {
                inject: true,
                hash: true,
                chunks: ['reddingsbrigade/incidenten/', 'tailwind'],
                filename: 'reddingsbrigade/incidenten/index.html',
                template: './src/reddingsbrigade/incidenten/index.ejs'
            }
        ),
        new HtmlWebpackTagsPlugin({
                append: true
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name]/index.css',
            chunkFilename: '[id]/index.css',
        }),
    ],
}