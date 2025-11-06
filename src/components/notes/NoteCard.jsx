import { MdEdit, MdDelete } from "react-icons/md";
import { formatToDate, formatToTime } from "../../utils/utils";
import useNotes from "../../hooks/useNotes";
import useNoteStore from "../../store/noteStore";
import styles from "./NoteCard.module.css";

export default function NoteCard({ note }) {
	const { setIsOpen, setSelectedNote } = useNotes();
	const { deleteNote } = useNoteStore();

	function handleEditAndUpdate(note) {
		setIsOpen(true);
		setSelectedNote(note);
	}

	return (
		<div className={styles.notecard}>
			<div className={styles.actions}>
				<button onClick={() => handleEditAndUpdate(note)}>
					<MdEdit />
				</button>
				<button onClick={() => deleteNote(note._id)}>
					<MdDelete />
				</button>
			</div>
			<header>
				<span className={styles.date}>{formatToDate(note.createdAt)}</span>
				<h4 className={styles.title}>{note.title}</h4>
			</header>
			<main>
				<p className={styles.note}>{note.content}</p>
				<span className={styles.time}>{formatToTime(note.createdAt)}</span>
			</main>
		</div>
	);
}
