import { useRef, useState } from 'react';

export default function Stopwatch() {
  const [detik, setDetik] = useState(0);
  const timerId = useRef(null); // Menyimpan ID interval secara internal

  const mulaiTimer = () => {
    // Kita simpan ID interval di .current agar bisa diakses saat berhenti
    timerId.current = setInterval(() => {
      setDetik(d => d + 1);
    }, 1000);
  };

  const berhentiTimer = () => {
    // Menghentikan timer menggunakan ID yang disimpan di useRef
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1>Waktu: {detik}s</h1>
      <button onClick={mulaiTimer}>Mulai</button>
      <button onClick={berhentiTimer}>Berhenti</button>
    </div>
  );
}