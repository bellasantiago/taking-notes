//Dependencies
const util = require('util');
const fs = require('fs');
const { nanoid } = require('nanoid');


const noteHistory = util.promisify(fs.readFile);
const noteNew = util.promisify(fs.writeFile);

class Save {
    write(note) {
        return noteNew('db/db.json', JSON.stringify(note));
    }

    read() {
        return noteHistory('db/db.json');
    }

    retrieveNotes() {
        return this.read().then(notes => {
            let noteJSON;
            try {
                noteJSON = [].concat(JSON.parse(notes));
            } catch (err) {
                noteJSON = [];
            }
            return noteJSON;
        });
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Please type in the fields.');
        }
        // Use NANOID package to add unique IDs
        const writeNote = { title, text, id: nanoid(10) };

        // Retrieve Notes, add the new note, update notes
        return this.noteSaved()
            .then(notes => [...notes, writeNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => writeNote);
    }
}

module.exports = new Save();
