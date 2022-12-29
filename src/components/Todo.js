import styles from "../style.module.css";

const Todo = ({todoItem, todoList, setTodoList}) => {

    const deleteTodo =() =>{
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    }

    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoname}>{todoItem.name}</h3>
            <button className={styles.deletebutton} onClick={deleteTodo}>Done</button>
        </div>
    )
}

export default Todo;