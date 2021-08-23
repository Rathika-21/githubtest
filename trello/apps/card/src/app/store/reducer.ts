import { Action, createReducer, on } from '@ngrx/store';
import { actionTypes } from './action';

export interface organizeTaskState  {
    todoList: any[];
  }
  
  
  
  export const initialState : organizeTaskState= {
  todoList: [],
  }
  export const organizeTaskReducer = createReducer(
    initialState,
    on(actionTypes.addList, (state, {list}) => ({
        ...state,
        todoList: [...state.todoList, list]
      })),
        on(actionTypes.addCard, (state, action) => ({
        ...state,
        // todoListCard: [...state.todoListCard, card]
        // ...state.todoList[action.card.Title] = [...state.todoList[action.card.title],action.card.cardname]
        todoList:state.todoList.map((response:any)=>{
            console.log("Response",response);
            if(response.title==action.card.title){
                let obj = {
                    [response.title] : action.card.cardname,
                }
                return {
                    
                    ...response,

                    [response.title]: [...response[response.title],action.card.cardname],
                    
                }
            }
            else{
                return response;
            }
        })
    }))
  );


//   export interface organizeCardState  {
//     todoListCard: any[];
//   }
//   export const initialState1 : organizeCardState= {
//     todoListCard: [],
//     }
//     export const organizeCardReducer = createReducer(
//         initialState1,
       
//     );