import { ThemeSwitch, Button } from '../ui';
import { getGreetingAndTime } from '../../utils/utils';
import styles from './Header.module.css';

export default function Header() {
	const { greeting, formattedDate } = getGreetingAndTime();
	return (
		<header className={styles.header}>
			<div className={styles.headerDisplayMsg}>
				<h4>{greeting}</h4>
				<span>{formattedDate}</span>
			</div>
			<div className={styles.headerActions}>
				<Button>New Note</Button>
				<ThemeSwitch />
			</div>
		</header>
	);
}
