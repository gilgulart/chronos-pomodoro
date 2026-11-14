import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import styles from './styles.module.css';
import { PlayCircleIcon } from 'lucide-react';
import { useRef, type SubmitEventHandler } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
// import { StopCircleIcon } from 'lucide-react';

export function Form() {
  const {state, setState} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);
  
  //ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  console.log(nextCycle);
   

  const handleCreateNewTask: SubmitEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    if (taskNameInput.current === null) return;
    
    const taskName = taskNameInput.current.value.trim();
    
    if(!taskName){
      alert('Digite o nome da tarefa')
      return
    };

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60


    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle, //Conferir
        secondsRemaining, //Conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),//Conferir
        tasks: [...prevState.tasks, newTask],
        config: {...prevState.config}
      }
    })
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
            ref={taskNameInput}
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
