import styles from './styles.module.css';
import { House } from 'lucide-react';
import { RotateCcwClock } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para a página inicial'
        title='Ir para a página inicial'
      >
        <button>
          <House></House>
        </button>
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <button>
          <RotateCcwClock></RotateCcwClock>
        </button>
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Configurações'
        title='Configurações'
      >
        <button>
          <Settings></Settings>
        </button>
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Mudar tema'
        title='Mudar tema'
      >
        <button onClick={handleThemeChange}>
          <Sun></Sun>
        </button>
      </a>
    </nav>
  );
}
