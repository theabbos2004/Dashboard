import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/index"
import {routes} from "../config/routeConfig"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/shared/Loding/Loding";
import { navborIsActive } from "../Reducer/MenuReducer";
const SignInPage=React.lazy(()=>import("../pages/SignInPage/SignInPage"))
function AppLayout() {
  let navborActive=useSelector(store=>store.menu.navborActive)
  let dispatch=useDispatch()
  let entred=useSelector(state=>state.users.entred)
  useEffect(()=>{
    if(window.innerWidth<576){
      dispatch(navborIsActive(false))
    }
  },[])
  return (
    <div className={styles.layout} style={{padding: entred?"1rem":"0rem"}}>
      {
        !entred?
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<Loading/>}><SignInPage/></React.Suspense>}/>
          <Route path="*" element={<React.Suspense fallback={<Loading/>}><SignInPage/></React.Suspense>}/>
        </Routes>:
        <>
          <Navbar sx={{ width: "15%",display:navborActive?"block":"none" }}/>
          <div style={{ paddingLeft:navborActive?"calc(15% + 1rem)":"0", width: "100%" }}>
            <Header/>
            <Routes>
              {routes.map(({ id, ...route }) => (
                <Route key={id} {...route} />
              ))}
            </Routes>
            <Footer/>
          </div>
        </>
      }
    </div>
  );
}

export default AppLayout;
