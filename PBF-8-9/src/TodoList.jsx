import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Mengimpor hook Redux untuk membaca state dan mengirim aksi
import { toggleTodoAction, deleteTodoAction } from "./redux"; // Mengimpor action creator untuk mengubah status dan menghapus todo

const TodoList = () => {
  // Mengambil daftar todos dari global state Redux
  const todos = useSelector(state => state.todos);
  
  // Inisialisasi dispatch untuk mengirim aksi ke store
  const dispatch = useDispatch();
  
  // Fungsi helper untuk memicu aksi toggle (centang/tidak) dan delete melalui dispatch
  const toggleTodo = todoID => dispatch(toggleTodoAction(todoID));
  const deleteTodo = todoID => dispatch(deleteTodoAction(todoID));

  // Melakukan pemetaan (map) data todos menjadi elemen list (li)
  const renderTodos = todos.map(({ id, name, complete }) => (
    <li key={id}> {/* Menggunakan id sebagai key unik untuk setiap item */}
      <input
        type="checkbox"
        checked={complete} // Status checkbox berdasarkan nilai complete (true/false)
        onChange={toggleTodo.bind(null, id)} // Memanggil fungsi toggleTodo saat status checkbox berubah
      />
      {/* Jika status complete true, gunakan class 'complete' untuk memberi efek coret */}
      <span className={complete ? "complete" : null}>{name}</span>
      
      {/* Tombol hapus yang memanggil fungsi deleteTodo saat diklik */}
      <span className="delete-btn" onClick={deleteTodo.bind(null, id)}>
        X
      </span>
    </li>
  ));

  return (
    <>
      <h4>Todo List</h4>
      {/* Jika ada data, tampilkan list; jika tidak, tampilkan pesan default */}
      <ul>{renderTodos.length > 0 ? renderTodos : "No todo list yet"}</ul>
    </>
  );
};

export default TodoList;