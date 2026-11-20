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
import { StopCircleIcon } from 'lucide-react';
import type { MouseEvent } from 'react';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function Form() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  

  const handleCreateNewTask: SubmitEventHandler<HTMLFormElement> = event => {
    
    event.preventDefault();

    if (taskNameInput.current === null) return;
    
    const taskName = taskNameInput.current.value.trim();
    
    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }
    
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({type: TaskActionsTypes.START_TASK, payload: newTask });
    
  }
  
  function handleInterruptTask(
    e: MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    
    dispatch({type: TaskActionsTypes.INTERRUPT_TASK});
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
            disabled={!!state.activeTask}
          ></Input>
        </div>

        <div className='formRow'>
            <Tips></Tips>
        </div>

        {state.currentCycle > 0 && (
          <div className='formRow'>
            <Cycles></Cycles>
          </div>
        )}

        <div className='formRow'>
          {!state.activeTask && (
            <DefaultButton
              aria-label='iniciar nova tarefa'
              type='submit'
              id='runButton'
              icon={<PlayCircleIcon />}
              color='green'
            ></DefaultButton>
          )}

         {!!state.activeTask && (
            <DefaultButton
              onClick={handleInterruptTask}
              aria-label='Interromper tarefa atual'
              title='Interromper tarefa atual'
              type='button'
              id='runButton'
              icon={<StopCircleIcon />}
              color='red'
            ></DefaultButton>
          )}

          {/*  */}
        </div>
      </form>
    </>
  );
}

