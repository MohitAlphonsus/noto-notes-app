import { useState } from "react";
import useNoteGroupStore from "../../store/noteGroupStore";
import styles from "./NoteGroupForm.module.css";

export default function NoteGroupForm() {
	const [groupName, setGroupName] = useState("");
	const { createNoteGroup } = useNoteGroupStore();

	function handleChange(e) {
		setGroupName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		createNoteGroup(groupName);

		setGroupName("");
	}

	return (
		<div className={styles.noteGroupForm}>
			<h3>Add Note Group</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="groupName"
					value={groupName}
					onChange={handleChange}
				/>
				<button type="submit">&#43;</button>
			</form>
		</div>
	);
}
