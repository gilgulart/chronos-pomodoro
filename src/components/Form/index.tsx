import styles from './styles.module.css';

export function Form() {
  return (
    <>
      <form className={styles.form} action=''>
        <div className={styles.formRow}>
          <label htmlFor={styles.meuInput}>Task</label>
          <input id={styles.meuInput} type='text' />
        </div>

        <div className='formRow'>
          <p>
            Lorem ipsum dolor sit amet!
          </p>
        </div>
        
        <div className='formRow'>
          <p>
            Nesse ciclo <strong>descanse</strong> por 
          </p>
        </div>
      </form>
    </>
  );
}
