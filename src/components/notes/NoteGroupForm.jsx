import { useState } from 'react';
import useNotes from '../../hooks/useNotes';
import styles from './NoteGroupForm.module.css';

export default function NoteGroupForm() {
	const [group, setGroup] = useState('');
	const { setNoteGroups } = useNotes();

	function handleChange(e) {
		setGroup(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setNoteGroups(prevGroup => [...prevGroup, group]);
		setGroup('');
	}

	return (
		<div className={styles.noteGroupForm}>
			<h3>Add Note Group</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" name="group" value={group} onChange={handleChange} />
				<button type="submit">&#43;</button>
			</form>
		</div>
	);
}
