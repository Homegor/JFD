import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import NotFound from "./components/not-found";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/dashboard"
          component={Dashboard}
          // render={(props) => {
          //   return false && <Dashboard isAdmin={false} {...props} />;
          // }}
        />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path={"/404"} component={NotFound} />
        <Redirect from={"/admin"} to={"/dashboard"} />
        <Redirect to={"/404"} />
      </Switch>
    </div>
  );
}

export default App;
