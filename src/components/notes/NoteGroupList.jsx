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
		},
		[getNoteGroups]
	);

	useEffect(
		function () {
			if (noteGroups.length === 0) return;

			const savedGroupId = localStorage.getItem("activeGroup");
			const savedGroupExists = noteGroups.some(g => g._id === savedGroupId);

			if (savedGroupId && savedGroupExists) {
				setActiveGroup(savedGroupId);
			} else {
				const latestGroup = noteGroups[noteGroups.length - 1];
				setActiveGroup(latestGroup._id);
				localStorage.setItem("activeGroup", latestGroup._id);
			}
		},
		[noteGroups, setActiveGroup]
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
