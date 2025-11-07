import { useState, useEffect } from "react";
import { GiMoon, GiSun } from "react-icons/gi";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className={styles.theme}>
			<button onClick={handleThemeSwitch}>
				{theme === "light" ? <GiMoon /> : <GiSun />}
			</button>
		</div>
	);
}
