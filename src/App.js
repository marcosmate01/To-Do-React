import React, {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import './App.css';


function App() {
    const ENTER_KEY = 13
    const ESC_KEY = 27

     

    const [todos, setTodos ] = useState([])
    const [value, setValue] = useState("");
    

    const onChange = (event) => {
        setValue(event.target.value);
      };

      const submit =()=>{
         setTodos([
             ...todos,
            {id: new Date().getTime(),
            title:value,
            checked:false,
        },
         ])
      }

    const erase = () =>{
        setValue("")
    };

    const onToggle = (todo)=>{
        console.log(todo)
         
        setTodos(
            todos.map((obj)=> (obj.id === todo.id) ? 
        {...obj, checked: !todo.checked }: obj )
                
        
        ) }
         
    const onRemove = (todo) =>{
        setTodos(todos.filter((obj)=> (obj.id !== todo.id )  ))
        console.log(todo)
    }
    


    const onKeyDown = (event)=> {

        if(event.which ===  ENTER_KEY){
          submit()
            erase()
        } else if (event.which === ESC_KEY){
            erase()
        }

    }

  return (
    <section id='app' className='container'>     
        <header>
         <h1 className="title"> ToDo</h1>
        </header>
        <section className='main'>
           <input 
               className='new-todo'
               placeholder="o que precisa ser feito?"
               value={value}
               onChange={onChange}
               onKeyDown={onKeyDown}
             />
             <ul className='todo-list'>
                {todos.map((todo)=>(
                    <li key={todo.id.toString()}>
                        
                         <span
                          className={["todo" , todo.checked ?
                          "checked": ""].join(" ")} 
                          onClick={()=>onToggle(todo)}                               
                          role="button"
                          tabIndex={0}            
                          >{todo.title}
                         </span>

                         <button 
                         className='remove'
                         type="button"
                         onClick={()=> onRemove(todo)}> 
                            <MdDelete size={28}/>
                         </button>

                    </li>
                ))
                     
                } 
             </ul>
        </section>
         
        
    </section>     
  );
}

export default App;
