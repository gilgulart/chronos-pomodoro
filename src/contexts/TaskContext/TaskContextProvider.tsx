import { useReducer, useState } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  const [number, dispatch] = useReducer((state, action) => {
    console.log(state, action);
    switch (action){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'INITIAL':
        return 0;
    }
    return state;
  }, 0)

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O número é: {number}</h1>
      <button onClick={() => dispatch('INCREMENT')}>Incrementar</button>
      <button onClick={() => dispatch('DECREMENT')}>Decrementar</button>
      <button onClick={() => dispatch('INITIAL')}>Zerar</button>
    </TaskContext.Provider>
  );
}
