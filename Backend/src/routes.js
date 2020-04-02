const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

// Session
routes.post('/sessions', SessionController.create);

// Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Profile incidents
routes.get('/profile', ProfileController.index);

module.exports = routes;