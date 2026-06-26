import './App.css' // Mengimpor file CSS untuk mengatur tampilan/styling komponen App
import TodoInput from "./TodoInput"; // Mengimpor komponen TodoInput untuk menangani input data todo
import TodoList from "./TodoList"; // Mengimpor komponen TodoList untuk menampilkan data todo

// Komponen utama aplikasi
export default function App() {
  return (
    // Membungkus elemen aplikasi dalam div dengan class "App" untuk styling
    <div className="App">
      <h1>react-redux-hooks</h1> {/* Menampilkan judul aplikasi */}
      
      {/* Memanggil komponen TodoInput agar bisa digunakan user untuk menambah tugas */}
      <TodoInput />
      
      {/* Memanggil komponen TodoList untuk menampilkan daftar tugas yang sudah ada */}
      <TodoList />
    </div>
  )
}