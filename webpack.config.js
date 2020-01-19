const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    'tailwind': './src/tailwind.js',
    'index': './src/index.js',
    'waterhulpverlening': './src/waterhulpverlening/index.js',
    'waterhulpverlening/toezichthouden': './src/waterhulpverlening/toezichthouden/index.js',
    'waterhulpverlening/toezichthouden/openWaterEnBeach': './src/waterhulpverlening/toezichthouden/openWaterEnBeach/index.js',
    'waterhulpverlening/toezichthouden/preventie': './src/waterhulpverlening/toezichthouden/preventie/index.js',
    'waterhulpverlening/toezichthouden/professionalisme': './src/waterhulpverlening/toezichthouden/professionalisme/index.js',
    'waterhulpverlening/toezichthouden/verdrinkingen': './src/waterhulpverlening/toezichthouden/verdrinkingen/index.js',
    'waterhulpverlening/toezichthouden/zonesEnScannen': './src/waterhulpverlening/toezichthouden/zonesEnScannen/index.js',
    'waterhulpverlening/toezichthouden/zwembad': './src/waterhulpverlening/toezichthouden/zwembad/index.js',
    'waterhulpverlening/hulpverlening': './src/waterhulpverlening/hulpverlening/index.js',
    'waterhulpverlening/hulpverlening/gevaren' : './src/waterhulpverlening/hulpverlening/gevaren/index.js',
    'waterhulpverlening/hulpverlening/waterhulpverlening' : './src/waterhulpverlening/hulpverlening/waterhulpverlening/index.js',
    'waterhulpverlening/hulpverlening/redden' : './src/waterhulpverlening/hulpverlening/redden/index.js',
    'waterhulpverlening/hulpverlening/reddingsmiddelen' : './src/waterhulpverlening/hulpverlening/reddingsmiddelen/index.js',
    'waterhulpverlening/hulpverlening/grepen' : './src/waterhulpverlening/hulpverlening/grepen/index.js',
    'waterhulpverlening/hulpverlening/speciale reddingen' : './src/waterhulpverlening/hulpverlening/speciale reddingen/index.js',
    'waterhulpverlening/hulpverlening/eerste hulp' : './src/waterhulpverlening/hulpverlening/eerste hulp/index.js',
    'waterhulpverlening/hulpverlening/leidinggeven' : './src/waterhulpverlening/hulpverlening/leidinggeven/index.js',
    'waterhulpverlening/hulpverlening/psychische hulp' : './src/waterhulpverlening/hulpverlening/psychische hulp/index.js',
    'waterhulpverlening/hulpverlening/rampen' : './src/waterhulpverlening/hulpverlening/rampen/index.js',
    'waterhulpverlening/hulpverlening/communicatie' : './src/waterhulpverlening/hulpverlening/communicatie/index.js',
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
            options: { sourceMap: true }
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
        chunks: ['waterhulpverlening/toezichthouden/openWaterEnBeach', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/openWaterEnBeach/index.html',
        template: './src/waterhulpverlening/toezichthouden/openWaterEnBeach/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/toezichthouden/preventie', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/preventie/index.html',
        template: './src/waterhulpverlening/toezichthouden/preventie/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/toezichthouden/professionalisme', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/professionalisme/index.html',
        template: './src/waterhulpverlening/toezichthouden/professionalisme/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/toezichthouden/verdrinkingen', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/verdrinkingen/index.html',
        template: './src/waterhulpverlening/toezichthouden/verdrinkingen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/toezichthouden/zonesEnScannen', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/zonesEnScannen/index.html',
        template: './src/waterhulpverlening/toezichthouden/zonesEnScannen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/toezichthouden/zwembad', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/zwembad/index.html',
        template: './src/waterhulpverlening/toezichthouden/zwembad/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening - toezichthouden',
        chunks: ['waterhulpverlening/toezichthouden', 'tailwind'],
        filename: 'waterhulpverlening/toezichthouden/index.html',
        template: './src/waterhulpverlening/toezichthouden/index.ejs',
        hash: true
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening - verlenen van hulp bij een incident',
        chunks: ['waterhulpverlening/hulpverlening', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/index.html',
        template: './src/waterhulpverlening/hulpverlening/index.ejs',
        hash: true
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening',
        chunks: ['waterhulpverlening', 'tailwind'],
        filename: 'waterhulpverlening/index.html',
        template: './src/waterhulpverlening/index.ejs',
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
        chunks: ['waterhulpverlening/hulpverlening/gevaren', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/gevaren/index.html',
        template: './src/waterhulpverlening/hulpverlening/gevaren/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/waterhulpverlening', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/waterhulpverlening/index.html',
        template: './src/waterhulpverlening/hulpverlening/waterhulpverlening/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/redden', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/redden/index.html',
        template: './src/waterhulpverlening/hulpverlening/redden/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/reddingsmiddelen', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/reddingsmiddelen/index.html',
        template: './src/waterhulpverlening/hulpverlening/reddingsmiddelen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/grepen', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/grepen/index.html',
        template: './src/waterhulpverlening/hulpverlening/grepen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/speciale reddingen', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/speciale reddingen/index.html',
        template: './src/waterhulpverlening/hulpverlening/speciale reddingen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/eerste hulp', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/eerste hulp/index.html',
        template: './src/waterhulpverlening/hulpverlening/eerste hulp/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/leidinggeven', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/leidinggeven/index.html',
        template: './src/waterhulpverlening/hulpverlening/leidinggeven/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/psychische hulp', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/psychische hulp/index.html',
        template: './src/waterhulpverlening/hulpverlening/psychische hulp/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/rampen', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/rampen/index.html',
        template: './src/waterhulpverlening/hulpverlening/rampen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['waterhulpverlening/hulpverlening/communicatie', 'tailwind'],
        filename: 'waterhulpverlening/hulpverlening/communicatie/index.html',
        template: './src/waterhulpverlening/hulpverlening/communicatie/index.ejs'
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