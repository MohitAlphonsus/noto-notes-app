import useNotes from '../../hooks/useNotes';
import styles from './NoteGroupList.module.css';

export default function NoteGroupList() {
	const { noteGroups } = useNotes();

	return (
		<ul className={styles.list}>
			{noteGroups.map(group => (
				<li key={group}>{group}</li>
			))}
		</ul>
	);
}
