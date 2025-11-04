import { ThemeSwitch } from '../ui';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h4>Good Morning</h4>
			<ThemeSwitch />
		</header>
	);
}
