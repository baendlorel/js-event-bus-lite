module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    [
      '@babel/plugin-transform-classes',
      {
        loose: true,
      },
    ],
    // '@babel/plugin-transform-classes',
  ],
};
