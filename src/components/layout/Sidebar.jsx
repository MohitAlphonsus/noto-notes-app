import { Logo } from '../ui';
import { NoteGroupForm, NoteGroupList } from '../notes';
import styles from './Sidebar.module.css';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<NoteGroupForm />
			<NoteGroupList />
		</aside>
	);
}
