import React from "react";
import {
  Route,
  Routes,
  Navigate,
  useRoutes,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import AuthLayout from "./layouts/AuthLayout";
// import PostsLayout from "./layouts/PostsLayout";
// import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar/NavBar";
// import ProtectedRoute from "./components/ProtectedRoute";
import withRedux from "./hoc/withRedux";
import withRouter from "./hoc/withRouter";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routs";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "./store/authSlice";
// import PostPage from "./pages/Posts/PostPage";
// import PostsListPage from "./pages/Posts/PostsListPage";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SigupPage";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector());
  const location = useLocation();
  const elements = useRoutes(routes(isLoggedIn, location));
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col">
      <NavBar />
      {elements}
      <ToastContainer />
    </div>
  );

  /*        return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col">
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={"auth"} element={<AuthLayout />}>
          <Route index element={<Navigate to={"/auth/signUp"} />} />
          <Route path={"login/"} element={<LoginPage />} />
          <Route path={"signup"} element={<SignUpPage />} />
          <Route path={"*"} element={<Navigate to={"/auth/signUp"} />} />
        </Route>
        <Route
          path="posts"
          element={
            <ProtectedRoute
              redirectTo={"/auth/login"}
              element={<PostsLayout />}
            />
          }
        >
          <Route index element={<PostsListPage />} />
          <Route path={":postId"} element={<PostPage />} />
        </Route>
        <Route path={"*"} element={<Navigate to={"/posts"} />} />
      </Routes>

      <ToastContainer />
    </div>
  );*/
}
const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
