const express = require('express');
const nocache = require('nocache');

const app = express();
app.use(nocache());
app.set('etag', false)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})
const port = 3000;

const appDir = __dirname;

app.all('/css/styles.css', async (req, res) => {  res.sendFile(appDir + "/css/styles.css"); });
app.all('/css/theme_dark.css', async (req, res) => {  res.sendFile(appDir + "/css/theme_dark.css"); });
app.all('/css/theme_light.css', async (req, res) => {  res.sendFile(appDir + "/css/theme_light.css"); });
app.all('/js/lang/lang_en.js', async (req, res) => {  res.sendFile(appDir + "/js/lang/lang_en.js"); });
app.all('/js/lang/lang_ru.js', async (req, res) => {  res.sendFile(appDir + "/js/lang/lang_ru.js"); });
app.all('/js/lang/lang_ro.js', async (req, res) => {  res.sendFile(appDir + "/js/lang/lang_ro.js"); });
app.all('/js/lang/lang.js', async (req, res) => {  res.sendFile(appDir + "/js/lang/lang.js"); });
app.all('/js/lib/jquery/jquery-2.1.0.min.js', async (req, res) => {  res.sendFile(appDir + "/js/lib/jquery/jquery-2.1.0.min.js"); });
app.all('/js/lib/openlayers/ol.js', async (req, res) => {  res.sendFile(appDir + "/js/lib/openlayers/ol.js"); });
app.all('/js/lib/polyfill/misc.js', async (req, res) => {  res.sendFile(appDir + "/js/lib/polyfill/misc.js"); });
app.all('/js/lib/polyfill/polyfill.min.js', async (req, res) => {  res.sendFile(appDir + "/js/lib/polyfill/polyfill.min.js"); });
app.all('/js/lib/polyfill/webcomponents-bundle.js', async (req, res) => {  res.sendFile(appDir + "/js/lib/polyfill/webcomponents-bundle.js"); });
app.all('/js/index.js', async (req, res) => {  res.sendFile(appDir + "/js/index.js"); });
app.all('/js/loader.js', async (req, res) => {  res.sendFile(appDir + "/js/loader.js"); });
app.all('/js/map.js', async (req, res) => {  res.sendFile(appDir + "/js/map.js"); });
app.all('/js/navigation.js', async (req, res) => {  res.sendFile(appDir + "/js/navigation.js"); });
app.all('/js/smartaccess.dev.js', async (req, res) => {  res.sendFile(appDir + "/js/smartaccess.dev.js"); });
app.all('/js/ui.js', async (req, res) => {  res.sendFile(appDir + "/js/ui.js"); });
app.all('/js/themes/theme_light.js', async (req, res) => {  res.sendFile(appDir + "/js/themes/theme_light.js"); }); 
app.all('/js/themes/theme_point_cleaned.json', async (req, res) => {  res.sendFile(appDir + "/js/themes/theme_point_cleaned.json"); });
app.all('/*', async (req, res) => {
  res.sendFile(appDir + "/index.html");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = app;