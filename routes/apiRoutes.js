const noteData = require('../db/noteData.js');

module.exports = (app) => {
    // API GET Requests
    app.get('/notes', function (req, res) {
        saveData
            .retrieveNotes()
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    });
  
    // API POST Requests

    app.post('/notes', (req, res) => {
        saveData
            .addNote(req.body)
            .then((note) => res.json(note))
            .catch(err => res.status(500).json(err));
        });
        
  };