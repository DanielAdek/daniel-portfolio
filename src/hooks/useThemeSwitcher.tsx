import { useEffect, useState } from 'react';

function useThemeSwitcher() {
	const [theme, setTheme] = useState<string>(
		typeof window !== 'undefined' ? localStorage.theme : ''
	);
	const activeTheme: string = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
