import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import styles from './styles.module.css';
import { PlayCircleIcon } from 'lucide-react';
import { useState, type SubmitEventHandler } from 'react';
// import { StopCircleIcon } from 'lucide-react';

export function Form() {
  const [taskName, setTaskName] = useState('');

  const handleCreateNewTask: SubmitEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log('deu certo', taskName);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleCreateNewTask} action=''>
        <div></div>
        <div className={styles.formRow}>
          <Input
            id='meuInput'
            type='text'
            labelText='Task:'
            placeholder='Digite algo'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          ></Input>
        </div>

        <div className='formRow'>
          <p>Próximo intervalo é de min </p>
        </div>

        <div className='formRow'>
          <Cycles></Cycles>
        </div>

        <div className='formRow'>
          <DefaultButton
            id='runButton'
            icon={<PlayCircleIcon />}
            color='green'
          ></DefaultButton>
          {/* <DefaultButton
            id='runButton'
            icon={<StopCircleIcon />}
            color='red'
          ></DefaultButton> */}
        </div>
      </form>
    </>
  );
}
