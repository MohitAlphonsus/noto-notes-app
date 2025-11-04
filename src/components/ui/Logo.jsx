import { GiNotebook } from 'react-icons/gi';
import styles from './Logo.module.css';

export default function Logo() {
	return (
		<div className={styles.logo}>
			<GiNotebook />
			<span>Noto</span>
		</div>
	);
}
