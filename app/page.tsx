"use client";

import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getData, setUpdateStatus } from './models/mahasiswa';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';


// buat fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if (confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true) {
    alert (`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus`);
    await setUpdateStatus(npm)
    // reload otomatis
    location.reload();
  }
  // else
  // {
  //   alert("Cancel");
  // }
}

export default function RootPage() {
  //buat hook
  // hook dengan "use state"
  const [getValue, setValue] = useState({});

  // buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "fetchData"
    fetchData();
  }, [])

  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 6,
  //   },
  // })

  return (
    <>
    <title>View data mahasiswa</title>

    <nav className="text-center mb-5 flex justify-end mr-7">
    <Link href={"/add"} className="btn btn-active btn-ghost">
      <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
      tambah data mahasiswa
    </Link>
    </nav>
      {/* Tampilan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-neutral-400 h-12">
            <th className="w-10% border border-slate-700">Aksi</th>
            <th className="w-10% border border-slate-700">NPM</th>
            <th className="w-1/2 border border-slate-700">Nama</th>
            <th className="w-30% border border-slate-700">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>

            <tr key={index}>
              <td className="border border-black p-2.5 text-center">
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}`} className='bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-2 rounded-lg mr-1 text-sm'
                  title='Ubah Data'>
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon hapus */}
                <Link href={`/`} className='bg-red-600 hover:bg-red-700 text-white px-2.5 py-2 rounded-lg ml-1 text-sm'
                  title='Hapus Data' onClick={() => { setDelete(data.npm, data.nama) }}>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>
              </td>
              <td className="border border-black px-2.5 text-center">{data.npm}</td>
              <td className="border border-black px-2.5 text-justify">{data.nama}</td>
              <td className="border border-black px-2.5 text-center">{data.prodi}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}