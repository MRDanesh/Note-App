const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
};

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter( function (note) {
        return note.title === title;
    });
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('note is added!!');
    } else {
        console.log('note title is already exist!!')
    };
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return [];
    }    
};

module.exports = {
    addNote: addNote,
    getNotes: getNotes
};