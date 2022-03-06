import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
  expesnseList: [],
};
export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expesnseList: [...state.expesnseList, action.data],
      };
    }
    default:
      return state;
  }
};
