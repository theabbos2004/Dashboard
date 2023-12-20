import { createSlice } from "@reduxjs/toolkit";
let initialState={
    users:[
        {
        id:1,
        email:"aaa",
        password:"aaa"
        },
      ],
    entred:false,
    error:false,
    signUp:false,
}

let UsersReducer=createSlice({
    name:"menu",
    initialState,
    reducers:{
        SignInFunc:(state,action)=>{
          state?.users.filter((item,index)=>{
              if((action?.payload?.data?.email == item?.email) && (action?.payload?.data?.password == item?.password)){
                state.entred=true
                state.error=false
                action?.payload?.navigateFunc()
              }
              else{
                state.error=true
                state.entred=false
              }
          })

        },
      SignInActive:(state,action)=>{
          state.entred=false
          action?.payload?.navigateFunc()
      },
      SignUpFunc:(state,action)=>{
          state.entred=true
          state?.users.push({...action.payload.data,id:state?.users[state?.users?.length-1].id+1})
          action?.payload?.navigateFunc()
      },
      SignUpActive:(state,action)=>{
          state.signUp=action.payload
      }
    }
})

export const {SignInFunc,SignUpFunc,SignUpActive,SignInActive} = UsersReducer.actions
export default UsersReducer.reducer