module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
    ],
  ],
};