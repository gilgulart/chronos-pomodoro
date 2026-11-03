import styles from './styles.module.css';
import { House } from 'lucide-react';
import { RotateCcwClock } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sun } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href=''>
        <button>
          <House></House>
        </button>
      </a>
      <a className={styles.menuLink} href=''>
        <button>
          <RotateCcwClock></RotateCcwClock>
        </button>
      </a>
      <a className={styles.menuLink} href=''>
        <button>
          <Settings></Settings>
        </button>
      </a>
      <a className={styles.menuLink} href=''>
        <button>
          <Sun></Sun>
        </button>
      </a>
    </nav>
  );
}
