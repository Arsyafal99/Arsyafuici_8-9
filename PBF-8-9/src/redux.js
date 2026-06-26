import { createStore } from "redux"; // Mengimpor fungsi createStore dari library redux untuk membuat store

const initialState = { // Mendefinisikan state awal aplikasi, yaitu list todo yang kosong
  todos: []
};

// Reducer adalah fungsi untuk menentukan perubahan state berdasarkan action yang diterima
const reducers = (state, { type, payload }) => { 
  switch (type) { // Memeriksa tipe aksi yang masuk untuk menentukan perubahan apa yang harus dilakukan
    case "ADD_TODO": // Case untuk menambahkan item todo baru
      return {
        ...state, // Menyalin state yang lama agar tidak hilang
        todos: [...state.todos, payload] // Menambahkan data todo baru (payload) ke dalam list todos
      };
    case "TOGGLE_TODO": // Case untuk mengubah status selesai/belum dari suatu todo
      return {
        ...state,
        todos: state.todos.map(todo => // Melakukan map untuk mencari todo berdasarkan id
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case "DELETE_TODO": // Case untuk menghapus item todo berdasarkan id
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload) // Memfilter array untuk membuang todo yang id-nya sesuai payload
      };
    default: // Mengembalikan state jika tidak ada action yang cocok
      return state;
  }
};

// Membuat store global dengan menggunakan reducer dan state awal
export const store = createStore(
  reducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension() // Mengaktifkan Redux DevTools untuk keperluan debugging
);

// ACTION CREATORS: Fungsi yang mengembalikan objek action untuk dikirim (dispatch) ke reducer
export const addTodoAction = todo => ({
  type: "ADD_TODO", // Tipe aksi
  payload: todo // Data yang akan diproses
});

export const toggleTodoAction = todoID => ({
  type: "TOGGLE_TODO",
  payload: todoID
});

export const deleteTodoAction = todoID => ({
  type: "DELETE_TODO",
  payload: todoID
});