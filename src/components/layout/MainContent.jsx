import { useEffect } from "react";
import { NoteCard, NoteForm } from "../notes";
import useNotes from "../../hooks/useNotes";
import useNoteStore from "../../store/noteStore";
import { MdNoteAdd } from "react-icons/md";
import styles from "./MainContent.module.css";

export default function MainContent() {
	const { notes, getNotesByGroup } = useNoteStore();
	const { activeGroup } = useNotes();

	useEffect(() => {
		getNotesByGroup(activeGroup);
	}, [activeGroup, getNotesByGroup]);

	return (
		<main className={styles.mainContent}>
			{notes?.length === 0 ? (
				<div className={styles.noNotes}>
					<MdNoteAdd />
					<p>No Notes Yet — Your Ideas Are Waiting To Be Written.</p>
				</div>
			) : (
				<div className={styles.noteCards}>
					{notes.map(note => (
						<NoteCard key={note._id} note={note} />
					))}
				</div>
			)}

			<NoteForm />
		</main>
	);
}
