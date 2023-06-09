const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(8080);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/contact-me', (req, res) => {
  res.render('contact-me', { title: 'Contact me' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found' });
});
