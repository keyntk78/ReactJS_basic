import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './ToDos/ListTodo';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo App &amp;
        </p>
        {/* <MyComponent/> */}
        <ListTodo/>
      </header>
      
    </div>
  );
}

export default App;
