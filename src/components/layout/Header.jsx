import useNotes from "../../hooks/useNotes";
import useNoteGroupStore from "../../store/noteGroupStore";
import { ThemeSwitch, Button } from "../ui";
import { getGreetingAndTime } from "../../utils/utils";
import styles from "./Header.module.css";
import { use } from "react";

export default function Header() {
	const { noteGroups } = useNoteGroupStore();
	const { setIsOpen } = useNotes();
	const { greeting, formattedDate } = getGreetingAndTime();

	const disabled = noteGroups?.length === 0 ? true : false;

	return (
		<header className={styles.header}>
			<div className={styles.headerDisplayMsg}>
				<h4>{greeting}</h4>
				<span>{formattedDate}</span>
			</div>
			<div className={styles.headerActions}>
				<Button
					btnType="primary"
					onClick={() => setIsOpen(true)}
					disabled={disabled}
				>
					New Note
				</Button>
				<ThemeSwitch />
			</div>
		</header>
	);
}
