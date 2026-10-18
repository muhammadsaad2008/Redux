import{createSlice,nanoid} from "@reduxjs/toolkit"

const initialState ={
     todos:[
        {
            id:1,
            text:"Learn Redux Toolkit",
            completed:false,
        },
      {
        id:2,
        text:"Buy Milk",
        completed:false,
      },
     ],
};



export const todoSlice=createSliceSlice({
    name:"todos",
    initialState,
    reducer:{
        addtodo:(state,action)=>{
            console.log("payload:",action.payload);
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
            };
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        },
    },
});


// Action

export const{add,removeTodo}=todoSlice;

export default todoSlice.reducer;

