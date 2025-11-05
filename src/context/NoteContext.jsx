import { createContext, useState } from 'react';

const NoteContext = createContext();

function NoteProvider({ children }) {
	const [noteGroups, setNoteGroups] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NoteContext.Provider
			value={{ noteGroups, setNoteGroups, isOpen, setIsOpen }}
		>
			{children}
		</NoteContext.Provider>
	);
}

export { NoteProvider, NoteContext };
