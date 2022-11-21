import Question3 from "./views/Question3";
import Question1 from "./views/Question1";
import Question4 from "./views/Question4";
import Question5 from "./views/Question5";
import Question6 from "./views/Question6";
// import "./App.css";
import Question2 from "./views/Question2";
import Question7 from "./views/Question7";
import Question8 from "./views/Question8";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ margin: "20px" }}>
      
      {/* <h4>Buat branch baru terlebih dahulu</h4>
      <small>
        format nama branch <i>test-nama_anda</i>
      </small>
      <br /> */}
      <small>
        untuk mengerjakan langsung pada tiap file yang terdapat di folder
        <i>src/views</i>
      </small>
      <hr></hr>
      <ul>
        <li>
          Buat branch baru dengan format nama branch &nbsp;
          <i>dev-nama_anda</i>
        </li>
        <li>Push branch anda ke server</li>
      </ul>
      <hr></hr>
      <h4>Question 1</h4>
      <ul>
        <li>
          Tampilkan hasil aritmatika (tambah, kurang ,kali, bagi) dari 2 data
          (num1, num2) yg telah tersedia.&nbsp;
          <small>
            <i>
              format tampilan &gt;&gt;
              {"num1{spasi}operasi aritmatika{spasi}num2=hasil"}
            </i>
          </small>
        </li>
        <li>
          Tambahkan daftar hobi yang telah tersedia dengan 1 hobi yang anda
          inginkan, lalu tampilkan seluruhnya (menggunakan fungsi array)
        </li>
      </ul>
      <Question1></Question1>
      <hr></hr>
      <h4>Question 2</h4>
      <ul>
        <li>Tampilkan nama, nomor telepon, dan kota data kedua </li>
        <li>
          Tampilkan nama belakang, nama perusahaan, dan latitude data kedua
        </li>
      </ul>
      <Question2></Question2>
      <hr></hr>
      <h4>Question 3</h4>
      <ul>
        <li>Tampilkan nama, nomor telepon, dan kota data kedua </li>
        <li>Tampilkan nama perusahaan, dan latitude data keempat</li>
      </ul>
      <Question3></Question3>
      <small>
        data ambil dari fulder <i>src/data/person.json</i>
      </small>
      <hr></hr>
      <h4>Question 4</h4>
      <ul>
        <li>Tampilkan semua kota dengan tanda pemisah berupa koma(,)</li>
        <li>Tampilkan semua username yang memiliki lebih dari 10 karakter</li>
      </ul>
      <Question4></Question4>
      <small>
        data ambil dari fulder <i>src/data/person.json</i>
      </small>
      <hr></hr>
      <h4>Question 5</h4>
      <ul>
        <li>Tampilkan semua kota dengan tanda pemisah berupa kome(,)</li>
        <li>Tampilkan semua username yang memiliki lebih dari 10 karakter</li>
      </ul>
      <Question5></Question5>
      <small>
        data ambil dari fulder <i>src/data/person.json</i>
      </small>
      <hr></hr>
      <h4>Question 6</h4>
      <ul>
        <li>
          Buat 4 state masing2 bertipe string, number, boulean, dan array
          menggunakan useState
        </li>
        <li>Tampilkan semua state yang telah dibuat pada poin sebelumnya</li>
        <li>
          Ubah label ketika tombol diklik dengan menggunakan react hook
          <i>(useState)</i>{" "}
        </li>
        <li>
          Ketika berubah otomatis merubah <i>(useEffect)</i>
        </li>
      </ul>
      <Question6></Question6>
      <hr></hr>
      <h4>Question 7</h4>
      <ul>
        <li>Tampilkan data berupa nama dan email yang ada di redux</li>
        <li>Ubah data website menjadi website TKI dan ditampilkan</li>
      </ul>
      &nbsp;
      <a href="https://www.npmjs.com/package/react-loading">
        <i>https://www.npmjs.com/package/react-loading</i>
      </a>
      <Question7></Question7>
      <hr></hr>
      <h4>Question 8</h4>
      <ul>
        <li>
          Install library react-loading dan implementasikan salah satu loading
          yang tersedia&nbsp;
        </li>
      </ul>
      <a href="https://www.npmjs.com/package/react-loading">
        <i>https://www.npmjs.com/package/react-loading</i>
      </a>
      <Question8></Question8>
      <hr></hr>
    </div>
  );
}

export default App;
