import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Post from './components/Post';

//eslint-disable-next-line import/no-webpack-loader-syntax
import Content from '!babel-loader!@mdx-js/loader!./markdown/Content.mdx'

function App() {
  return (
    <div className="App">
        <Post>
          <Content />
        </Post>
    </div>
  );
}

export default App;
