import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { AddUserPage } from "pages/HomePage/AddUserPage/AddUserPage";
import { Layout } from "./Layout/Layout";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />}/>
        <Route path="add" element={<AddUserPage/>}/>

      </Route>
    </Routes>
  )
};
