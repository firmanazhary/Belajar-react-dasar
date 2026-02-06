import React from 'react';
import { useImmerReducer } from 'use-immer'; // Gabungan Reducer + Immer

// 1. Buku Aturan (Reducer)
const coffeeReducer = (draft, action) => {
  switch (action.type) {
    case 'TAMBAH_GULA':
      draft.gula += 1; // Pakai Immer, bisa langsung tambah!
      break;
    case 'GANTI_SUSU':
      draft.susu = action.jenis;
      break;
    case 'RESET':
      return { gula: 0, susu: 'Sapi' }; // Reset ke awal
    default:
      break;
  }
};

const KedaiKopi = () => {
  // 2. Inisialisasi State
  const [pesanan, dispatch] = useImmerReducer(coffeeReducer, {
    gula: 0,
    susu: 'Sapi'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Pesanan Kopi Kamu:</h2>
      <p>Gula: {pesanan.gula} sendok</p>
      <p>Jenis Susu: {pesanan.susu}</p>

      {/* 3. Mengubah Nilai via Dispatch */}
      <button onClick={() => dispatch({ type: 'TAMBAH_GULA' })}>
        Tambah Gula
      </button>
      
      <button onClick={() => dispatch({ type: 'GANTI_SUSU', jenis: 'Oatmilk' })}>
        Ganti ke Oatmilk
      </button>

      {/* 4. Reset State */}
      <button onClick={() => dispatch({ type: 'RESET' })} style={{ color: 'red' }}>
        Batalin Semua
      </button>
    </div>
  );
};

export default KedaiKopi;