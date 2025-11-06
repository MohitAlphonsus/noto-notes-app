import { useEffect } from "react";
import useNotes from "../../hooks/useNotes";
import useNoteGroupStore from "../../store/noteGroupStore";
import styles from "./NoteGroupList.module.css";

export default function NoteGroupList() {
	const { noteGroups, getNoteGroups } = useNoteGroupStore();
	const { activeGroup, setActiveGroup } = useNotes(noteGroups[0]);
	useEffect(
		function () {
			getNoteGroups();
		},
		[getNoteGroups]
	);

	return (
		<ul className={styles.list}>
			{noteGroups?.length === 0 ? (
				<li>Create Note Group</li>
			) : (
				noteGroups.map(noteGroup => (
					<li
						key={noteGroup._id}
						className={
							noteGroup._id === activeGroup ? styles.active : styles.empty
						}
						onClick={() => setActiveGroup(noteGroup._id)}
					>
						{noteGroup.name}
					</li>
				))
			)}
		</ul>
	);
}
