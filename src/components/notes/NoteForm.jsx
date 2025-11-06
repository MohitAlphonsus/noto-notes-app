import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useNotes from "../../hooks/useNotes";
import { Button } from "../ui";
import useNoteStore from "../../store/noteStore";
import styles from "./NoteForm.module.css";
export default function NoteForm() {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const { isOpen, setIsOpen, activeGroup, selectedNote, setSelectedNote } =
		useNotes();
	const { createNote, updateNote } = useNoteStore();

	useEffect(
		function () {
			if (selectedNote) {
				setNote({
					title: selectedNote.title,
					content: selectedNote.content,
				});
				setIsOpen(true);
			}
		},
		[selectedNote]
	);

	if (!isOpen) return null;

	function handleChange(e) {
		setNote(prevNote => ({
			...prevNote,
			[e.target.name]: e.target.value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (selectedNote) {
			updateNote(selectedNote._id, note.title, note.content);
		} else {
			createNote(activeGroup, note.title, note.content);
		}

		setNote({ title: "", content: "" });
		setIsOpen(false);
		setSelectedNote(null);
	}

	return createPortal(
		<>
			<div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
			<div className={styles.noteFormModel}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={note.title}
						onChange={handleChange}
					/>
					<textarea
						placeholder="descriptive note"
						name="content"
						value={note.content}
						onChange={handleChange}
					/>
					<div className={styles.formActions}>
						<Button btnType="primary" type="submit">
							{selectedNote ? "Update" : "Save"}
						</Button>
						<Button btnType="secondary" onClick={() => setIsOpen(false)}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</>,
		document.getElementById("modal")
	);
}
