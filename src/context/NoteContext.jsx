import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeGroup, setActiveGroup] = useState(null);

	return (
		<NoteContext.Provider
			value={{ isOpen, setIsOpen, activeGroup, setActiveGroup }}
		>
			{children}
		</NoteContext.Provider>
	);
}

export { NoteProvider, NoteContext };
