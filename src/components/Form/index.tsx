import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import styles from './styles.module.css';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext';

export function Form() {
  const { setState } = useTaskContext()

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: "21:00"
      }
    })
  }

  return (
    <>
      <form className={styles.form} action=''>
        <div>
          <button type='button' onClick={handleClick}>Clicar</button>
        </div>
        <div className={styles.formRow}>
          <Input
            id='meuInput'
            type='text'
            labelText='Task:'
            placeholder='Digite algo'
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
          <DefaultButton
            id='runButton'
            icon={<StopCircleIcon />}
            color='red'
          ></DefaultButton>
        </div>
      </form>
    </>
  );
}
