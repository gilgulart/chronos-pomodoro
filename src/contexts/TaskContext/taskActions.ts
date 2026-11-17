import type { TaskModel } from '../../models/TaskModel';

export const TaskActionsTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_TASK: 'RESET_TASK',
}

export type TaksActionModel =
  | {
      type: typeof TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionsTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
    type: typeof TaskActionsTypes.RESET_TASK;
    payload?: TaskModel;
  }
