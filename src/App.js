import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-menu">
            <p className="Title">Diplom</p>
            <a href="https://reactjs.org/" className="Login">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Войти
            </a>
          </div>
          <h1 className="land">
            Пройди тестирование!
          </h1>
          <div>
            <p>Оцени свои навыки программирования</p>
            <p>и проходи обучающие тесты для улучшения своих результатов!</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
