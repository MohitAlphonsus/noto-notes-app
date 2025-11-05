import styles from './NoteCard.module.css';

export default function NoteCard() {
	return (
		<div className={styles.notecard}>
			<header>
				<span className={styles.date}>12/10/2025</span>
				<h4 className={styles.title}>Story Idea – The Clockmaker’s Daughter</h4>
			</header>
			<main>
				<p className={styles.note}>
					A girl discovers her father’s old pocket watch can rewind time, but
					each use erases one of her memories. Theme explores sacrifice and
					nostalgia.
				</p>
				<span className={styles.time}>12:45PM Wednesday</span>
			</main>
		</div>
	);
}
