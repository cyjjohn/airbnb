export default ({ env }) => ({
  plugins:[
    env==='development'? require('@postcss-plugins/console'):false,
    env==='production'? require('postcss-plugin'):false,
  ]
})