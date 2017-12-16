const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return notes = JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	var notes = fetchNotes();
	var fnote = notes.filter((note) => note.title === title);
	return fnote[0];	
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var newNotes = notes.filter(note => note.title !== title);
	saveNotes(newNotes);

	return notes.length !== newNotes.length;
};

var logNote = (note) => {
	console.log('---');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	addNote, //addNote: addNote (identical) in es6 if you have a property that is identical to the value 
	getAll, 
	getNote,
	removeNote,
	logNote
};
