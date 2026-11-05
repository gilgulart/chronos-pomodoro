import { Input } from '../Input';
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import styles from './styles.module.css';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

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
          <Cycles></Cycles>
        </div>

        <div className='formRow'>
          <DefaultButton id='runButton' icon={<PlayCircleIcon/>} color='green'></DefaultButton>
          {/* <DefaultButton id='runButton' icon={<StopCircleIcon/>} color='red'></DefaultButton> */}
        </div>
      </form>
    </>
  );
}
