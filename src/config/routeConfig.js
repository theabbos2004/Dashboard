import React from "react";
import Loding from "../components/shared/Loding/Loding";

const DashboardPage=React.lazy(()=>import("../pages/DashboardPage/DashboardPage"))
const TablePage=React.lazy(()=>import("../pages/TablePage/TablePage"))
const BillingPage=React.lazy(()=>import("../pages/BillingPage/BillingPage"))
const ProfilePage=React.lazy(()=>import("../pages/ProfilePage/ProfilePage"))


export const routes = [
  { id: 2, path: "/Dashboard", element: <React.Suspense fallback={<Loding/>}><DashboardPage/></React.Suspense> },
  { id: 3, path: "/Table", element: <React.Suspense fallback={<Loding/>}><TablePage/></React.Suspense> },
  { id: 4, path: "/Billing", element: <React.Suspense fallback={<Loding/>}><BillingPage/></React.Suspense> },
  { id: 5, path: "/Profile", element: <React.Suspense fallback={<Loding/>}><ProfilePage/></React.Suspense> },
];
