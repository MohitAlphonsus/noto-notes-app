import { useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import useNotes from "../../hooks/useNotes";
import useNoteGroupStore from "../../store/noteGroupStore";
import styles from "./NoteGroupList.module.css";

export default function NoteGroupList() {
	const { noteGroups, getNoteGroups, deleteNoteGroup } = useNoteGroupStore();
	const { activeGroup, setActiveGroup } = useNotes();
	useEffect(
		function () {
			getNoteGroups();

			const savedGroupId = localStorage.getItem("activeGroup");
			if (savedGroupId && noteGroups.length > 0) {
				const savedGroup = noteGroups.find(g => g._id === savedGroupId);
				if (savedGroup) {
					setActiveGroup(savedGroup._id);
				}
			} else if (noteGroups.length > 0 && !activeGroup) {
				// Default to the first group if none selected
				setActiveGroup(noteGroups[0]._id);
				localStorage.setItem("activeGroup", noteGroups[0]._id);
			}
		},
		[getNoteGroups]
	);

	function handleSelectNoteGroup(noteGroup) {
		setActiveGroup(noteGroup._id);
		localStorage.setItem("activeGroup", noteGroup._id);
	}

	return (
		<ul className={styles.list}>
			{noteGroups?.length === 0 ? (
				<p className={styles.noList}>Create Note Group</p>
			) : (
				noteGroups.map(noteGroup => (
					<li
						key={noteGroup._id}
						className={
							noteGroup._id === activeGroup ? styles.active : styles.empty
						}
						onClick={() => handleSelectNoteGroup(noteGroup)}
					>
						{noteGroup.name}
						<div className={styles.actions}>
							<button onClick={() => deleteNoteGroup(noteGroup._id)}>
								<MdDelete />
							</button>
						</div>
					</li>
				))
			)}
		</ul>
	);
}
