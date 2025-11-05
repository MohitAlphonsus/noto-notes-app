import { NoteCard, NoteForm } from '../notes';
import { MdNoteAdd } from 'react-icons/md';
import styles from './MainContent.module.css';

export default function MainContent() {
	return (
		<main className={styles.mainContent}>
			{/* <div className={styles.noNotes}>
				<MdNoteAdd />
				<p>No Notes Yet — Your Ideas Are Waiting To Be Written.</p>
			</div> */}
			<NoteForm />
			{/* <h2>JavaScript</h2> */}
			<div className={styles.noteCards}></div>
		</main>
	);
}
