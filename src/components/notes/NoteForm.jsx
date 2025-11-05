import { useState } from 'react';
import { createPortal } from 'react-dom';
import useNotes from '../../hooks/useNotes';
import { Button } from '../ui';
import styles from './NoteForm.module.css';
export default function NoteForm() {
	const [note, setNote] = useState({
		title: '',
		desc: '',
	});
	const { isOpen, setIsOpen } = useNotes();
	if (!isOpen) return null;

	function handleChange(e) {
		setNote(prevNote => ({
			...prevNote,
			[e.target.name]: e.target.value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setNote('');

		console.log(note);
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
						name="desc"
						value={note.desc}
						onChange={handleChange}
					/>
					<div className={styles.formActions}>
						<Button btnType="primary" type="submit">
							Save
						</Button>
						<Button btnType="secondary" onClick={() => setIsOpen(false)}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</>,
		document.getElementById('modal'),
	);
}
