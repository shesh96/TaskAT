import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./utils/HandleApi";
// import { BiColorFill } from "react-icons/bi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getTodos(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="app">
      
      <div className="logo2">
      <img src="\logo3.jpg" alt="Logo"/> 

      </div>
      <div className="container">
        
        <div>
        
        <h1 > Task Manager Page </h1><br /><br />
        
        
        <h2>Welcome..✌</h2><br /> <i></i>
        <b>NOTE:👇</b><p> <b>[</b> This app is specially designed for you, <b>(<em>Aslesha==Careless😂</em>)</b> here you can simply write, update, and delete your tasks while studying seamlessly and efficiently to stay productive and in control of your workload.<b> ]</b> <br /> <p>Let's turn those <b><i> 'oh no's' into 'oh yeahs'</i></b> and tackle life with a smile! ✨😄</p> </p>

        </div>
        
        <div className="top">
          <input
            type="text"
            placeholder=" Let's add yous Task Careless..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div
            className="add_todo"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "UPDATE" : "ADD"}
          </div>
        </div>

        <div className="todo_list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
