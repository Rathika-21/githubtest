import { createAction, props } from '@ngrx/store';

export const addList = createAction(
    '[Create List Component] Create list',
    props<{ list: any}>()
  );

  export const addCard = createAction(
    '[Create List Component] Create card',
    props<{ card: any}>()
  );

  export const actionTypes = {
    addList, 
    addCard
  };
  
