import styles from './styles.module.css';
import { Sun, Moon, House, RotateCcwClock, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });


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
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  };

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
          {nextThemeIcon[theme]}
        </button>
      </a>
    </nav>
  );
}
