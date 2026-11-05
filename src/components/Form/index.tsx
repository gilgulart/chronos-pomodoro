import { Input } from '../Input';

import styles from './styles.module.css';

export function Form() {
  return (
    <>
      <form className={styles.form} action=''>
        <div className={styles.formRow}>
          <Input 
          id='meuInput' 
          type='text' 
          labelText='Task:'
          placeholder='Digite algo'
          ></Input>
        </div>

        <div className='formRow'>
          <p>
            Nesse ciclo <strong>descanse</strong> por
          </p>
        </div>

        <div className='formRow'>
          <p>Ciclos</p>
          <p>0 0 0 0 0 0 0</p>
        </div>

        <div className='formRow'>
          <button>Enviar</button>
        </div>
      </form>
    </>
  );
}
