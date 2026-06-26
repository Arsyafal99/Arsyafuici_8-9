import React, { useState } from "react"; // Mengimpor React dan hook useState untuk manajemen state lokal
import { useDispatch, useSelector } from "react-redux"; // Mengimpor hook Redux untuk mengirim aksi dan membaca state
import { v4 as uuid } from "uuid"; // Mengimpor fungsi uuid untuk membuat ID unik bagi setiap todo
import { addTodoAction } from "./redux"; // Mengimpor action creator untuk menambah todo

const TodoInput = () => {
  // Mengambil data todos dari store global menggunakan useSelector
  const todos = useSelector(state => state.todos);
  
  // State lokal untuk menyimpan teks input dari user
  const [todo, setTodo] = useState("");
  
  // Inisialisasi dispatch untuk mengirim aksi ke store
  const dispatch = useDispatch();
  
  // Fungsi helper untuk memanggil addTodoAction melalui dispatch
  const addTodo = todo => dispatch(addTodoAction(todo));

  // Mengupdate state lokal setiap kali user mengetik di input
  const onChange = e => {
    setTodo(e.target.value);
  };

  // Fungsi untuk menangani saat form disubmit
  const onSubmit = e => {
    e.preventDefault(); // Mencegah reload halaman saat form dikirim
    if (todo.trim() === "") alert("Please input todo"); // Validasi jika input kosong
    else {
      // Mengirim data todo baru ke reducer melalui dispatch
      addTodo({
        id: uuid(), // Membuat ID unik dengan uuid
        name: todo, // Mengambil nilai dari state lokal
        complete: false // Status awal todo adalah belum selesai
      });
    }
    setTodo(""); // Mengosongkan kembali input setelah data terkirim
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Menampilkan jumlah todo yang ada dengan mengakses panjang array todos */}
      <h3>You have {todos.length} todos</h3>
      <input
        type="text"
        placeholder="add todo"
        value={todo} // Nilai input terikat pada state lokal 'todo'
        onChange={onChange} // Memanggil fungsi onChange saat ada perubahan input
      />
      <button type="submit">Add Todo</button> {/* Tombol untuk memicu submit form */}
    </form>
  );
};

export default TodoInput;