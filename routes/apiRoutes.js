const noteData = require('../db/noteData.js');

module.exports = (app) => {
    // API GET Requests
    app.get('../public/notes.html', function (req, res) {
        noteData
            .retrieveNotes()
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    });
  
    // API POST Requests

    app.post('../public/notes.html', (req, res) => {
        noteData
            .addNote(req.body)
            .then((note) => res.json(note))
            .catch(err => res.status(500).json(err));
        });
        
  };