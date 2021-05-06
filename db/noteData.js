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
}

module.exports = new Save();
