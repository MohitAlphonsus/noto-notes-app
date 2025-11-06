import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedNote, setSelectedNote] = useState(null);
	const [activeGroup, setActiveGroup] = useState(
		() => localStorage.getItem("activeGroup") || null
	);

	return (
		<NoteContext.Provider
			value={{
				isOpen,
				setIsOpen,
				activeGroup,
				setActiveGroup,
				selectedNote,
				setSelectedNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
}

export { NoteProvider, NoteContext };
