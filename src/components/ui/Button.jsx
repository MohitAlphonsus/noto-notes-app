import styles from "./Button.module.css";
export default function Button({
	children,
	btnType,
	onClick,
	disabled = false,
	type = "button",
}) {
	return (
		<button
			className={`${styles.btn} ${styles[`btn--${btnType}`]} ${
				disabled ? styles.disabled : ""
			}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
