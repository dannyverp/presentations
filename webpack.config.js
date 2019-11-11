const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    'index': './src/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/gevaren': './src/lifeguards/waterhulpverlening/toezichthouden/gevaren/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/preventie': './src/lifeguards/waterhulpverlening/toezichthouden/preventie/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/professionalisme': './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.js',
    'lifeguards/waterhulpverlening/toezichthouden/verdrinkingen': './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.js',
  },
  mode: 'production',//change to 'development' for non minified js
  output: {
    filename: '[name]/index.js',
  },
  watch: true,
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
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/gevaren'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/gevaren/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/gevaren/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/preventie'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/preventie/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/preventie/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/professionalisme'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/professionalisme/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        hash: true,
        chunks: ['lifeguards/waterhulpverlening/toezichthouden/verdrinkingen'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/verdrinkingen/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/verdrinkingen/index.ejs'
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening',
        chunks: ['index'],
        template: './src/lifeguards/waterhulpverlening/index.ejs',
        filename: 'lifeguards/waterhulpverlening/index.html',
        hash: true
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Waterhulpverlening - toezichthouden',
        chunks: ['index'],
        filename: 'lifeguards/waterhulpverlening/toezichthouden/index.html',
        template: './src/lifeguards/waterhulpverlening/toezichthouden/index.ejs',
        hash: true
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'Danny\'s Presentation Library',
        chunks: ['index'],
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