const noteData = require('../db/noteData.js');
const util = require('util');
const fs = require('fs');
const { nanoid } = require('nanoid');

const newNotes = [];
const noteId = 0;

module.exports = (app) => {
    // GET Request
    app.get('/api/notes', function (req, res) {
        noteData
            .retrieveNotes()
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
    });

    // POST Requests
    app.post('/api/notes', function (req, res) {
        req.body.id = parseInt(noteId);
        newNotes.push(req.body);
        let notesJSON = JSON.stringify(newNotes, null, 2);
        fs.writeFile("./db/db.json", notesJSON, function (err) {
            if (err) {
                throw err;
            }
            res.json(true);
        })
    })};