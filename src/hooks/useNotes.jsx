import { NoteContext } from '../context/NoteContext';
import { useContext } from 'react';

function useNotes() {
	const context = useContext(NoteContext);
	if (context === undefined)
		throw new Error('NotesContext is used outside of the Provider');
	return context;
}

export default useNotes;
