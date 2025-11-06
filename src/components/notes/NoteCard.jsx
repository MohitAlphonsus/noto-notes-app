import { formatToDate, formatToTime } from "../../utils/utils";
import styles from "./NoteCard.module.css";

export default function NoteCard({ note }) {
	return (
		<div className={styles.notecard}>
			<header>
				<span className={styles.date}>{formatToDate(note.createdAt)}</span>
				<h4 className={styles.title}>{note.title}</h4>
			</header>
			<main>
				<p className={styles.note}>{note.content}</p>
				<span className={styles.time}>{formatToTime(note.createdAt)}</span>
			</main>
		</div>
	);
}
