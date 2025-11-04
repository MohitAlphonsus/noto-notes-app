import { createContext, useState } from 'react';

const NoteContext = createContext();

function NoteProvider({ children }) {
	const [noteGroups, setNoteGroups] = useState([]);
	return (
		<NoteContext.Provider value={{ noteGroups, setNoteGroups }}>
			{children}
		</NoteContext.Provider>
	);
}

export { NoteProvider, NoteContext };
