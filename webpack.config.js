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
    'lifeguards/waterhulpverlening/toezichthouden': './src/lifeguards/waterhulpverlening/toezichthouden/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/gevaren': './src/lifeguards/waterhulpverlening/toezichthouden/gevaren/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/openWaterEnBeach': './src/lifeguards/waterhulpverlening/toezichthouden/openWaterEnBeach/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/preventie': './src/lifeguards/waterhulpverlening/toezichthouden/preventie/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/professionalisme': './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/verdrinkingen': './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/zonesEnScannen': './src/lifeguards/waterhulpverlening/toezichthouden/zonesEnScannen/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/zwembad': './src/lifeguards/waterhulpverlening/toezichthouden/zwembad/index.js',
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
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]]',
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
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/gevaren', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/gevaren/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/gevaren/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/openWaterEnBeach', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/openWaterEnBeach/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/openWaterEnBeach/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/preventie', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/preventie/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/preventie/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/professionalisme', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/verdrinkingen', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/verdrinkingen/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/verdrinkingen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/zonesEnScannen', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/zonesEnScannen/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/zonesEnScannen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/zwembad', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/zwembad/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/zwembad/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening',
        chunks: ['index', 'tailwind'],
        template: './src/lifeguards/waterhulpverlening/index.ejs',
        filename: 'lifeguards/waterhulpverlening/index.html',
        hash: true
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening - toezichthouden',
        chunks: ['lifeguards/waterhulpverlening/toezichthouden', 'tailwind'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/index.ejs',
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