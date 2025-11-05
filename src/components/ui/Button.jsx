import styles from './Button.module.css';
export default function Button({
	children,
	btnType,
	onClick,
	type = 'button',
}) {
	return (
		<button
			className={`${styles.btn} ${styles[`btn--${btnType}`]}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
}
