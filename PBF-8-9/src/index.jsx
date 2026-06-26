import React from 'react' // Mengimpor library React
import ReactDOM from 'react-dom/client' // Mengimpor ReactDOM untuk merender aplikasi ke DOM
import App from './App' // Mengimpor komponen utama aplikasi (App)
import { Provider } from "react-redux"; // Mengimpor Provider untuk menghubungkan Redux dengan React
import { store } from "./redux"; // Mengimpor konfigurasi store yang telah kita buat di file redux.js

// Merender aplikasi ke dalam elemen HTML dengan id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider membungkus komponen App agar semua komponen di dalamnya 
      dapat mengakses state global dari store Redux 
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)