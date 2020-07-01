module.exports = {

  ignore: [
    /__mocks__/,
    /__tests__/
  ],

  inputSourceMap: true,

  plugins: [],

  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: 9
        }
      }
    ],
    '@babel/preset-typescript'
  ],

  sourceMaps: 'inline'

};
