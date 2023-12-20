import { createSlice } from "@reduxjs/toolkit";

let initialState={
    menu:[
        {
        id:1,
        title:"Dashboard",
        icon:"HomeIcon",
        focus:false,
        active:true,
        link:"/Dashboard"
        },
        {
        id:2,
        title:"Tables",
        icon:"ChartIcon",
        focus:false,
        active:false,
        link:"/Table"
        },
        {
        id:3,
        title:"Billing",
        icon:"BillingIcon",
        focus:false,
        active:false,
        link:"/Billing"
        }
      ],
    accountMenu:[
    {
        id:1,
        title:"Profile",
        icon:"ProfileIcon",
        focus:false,
        active:false,
        link:"/Profile"
    },
    {
        id:2,
        title:"Sign In",
        icon:"SignInIcon",
        focus:false,
        active:false,
        link:"/"
    },
    {
        id:3,
        title:"Sign Up",
        icon:"SignUpIcon",
        focus:false,
        active:false,
        link:"/"
    },
    ],
    pathURL:[
    ],
    navborActive:true
}

let MenuReducer=createSlice({
    name:"menu",
    initialState,
    reducers:{
        handleFocus:(store,action)=>{
            let {payload}=action
            let {menu,accountMenu}=store
            menu.forEach(element => {
              if ((element.id == payload?.id) && (element.title==payload?.title)){
                element.focus = true
              } else {
                element.focus = false
              }
            });
            accountMenu.forEach(element => {
              if ((element.id == payload?.id) && (element.title==payload?.title)){
                element.focus = true
              } else {
                element.focus = false
              }
            });
            store.menu=menu
            store.accountMenu=accountMenu
        },
        handleActive:(store,action) =>{
            let {payload}=action
            let {menu,accountMenu}=store
            menu.forEach(element => {
              if ((element.id == payload?.id) && (element.title==payload?.title)){
                store.pathURL=[{
                  id:1,
                  title:"Pages",
                  focus:false,
                  active:false,
                  link:""
              },element]
                element.active = true
            } else {
                element.active = false
              }
            });
            accountMenu.forEach(element => {
                if ((element.id == payload?.id) && (element.title==payload?.title)){
                  store.pathURL=[{
                    id:1,
                    title:"Pages",
                    focus:false,
                    active:false,
                    link:""
                },element]
                    element.active = true
              } else {
                element.active = false
              }
            });
            store.menu=menu
            store.accountMenu=accountMenu
          },
        navborIsActive:(store,action)=>{
          store.navborActive=action.payload
        }
    }
})

export const {handleFocus,handleActive,navborIsActive} = MenuReducer.actions
export default MenuReducer.reducer