import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ProtectedRouts from './components/ProtectedRouts';
import Modal from "./components/Modal";
import PostList from "./pages/PostList";
import Default from "./pages/Default";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import {Switch, Route} from "react-router";

function App() {
  return (
    <>
      {/* СДЕЛАТЬ ЧЕК АВТОРА И ЕСЛИ ОН, ТО ПРОПУСТИТЬ КОМПОНЕНТУ ЧЕРЕЗ HERO КАК В RESORT */}
      {/* ПОВЕСИТЬ ЛОАДЕР НА НОС */}
      <Navbar/>
      <Switch>
          <Route exact path="/" component={ProtectedRouts(PostList)} />
          <Route exact path="/addpost" component={ProtectedRouts(AddPost)} />
          <Route exact path="/posts/:postId" component={Details} />
          <Route exact path="/posts/:postId/edit" component={ProtectedRouts(EditPost)} />
          <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
