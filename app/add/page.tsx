"use client"
import React, { useState, useTransition } from 'react'
import { checkData } from '../models/mahasiswa';

export default function AddPage() {
    //hook (useState)
    const [getNPM, setNPM] = useState("");
    const [getNAMA, setNAMA] = useState("");
    const [getProdi, setProdi] = useState("");

    // buat hook ( use state)
    // untuk merespon hasil fungsi "checkData"
    const [getValue, setValue] = useState({});

    // buat fungsi untuk respon fungsi "checkData"
    const checkNPM = async (npm: string) => {
        setValue(await checkData(npm))
    }

    //fungsi simpan data
    const setSaveData = () => {
        // if(getNPM == "" || getNAMA == "" || getProdi == ""){
        //     alert("Lengkapi Seluruh Data !")
        // }else{
        //     alert("OK")
        // }

        // ternary operator
        (getNPM == "" || getNAMA == "" || getProdi == "")
        ? alert("Lengkapi Seluruh Data !")
        : [(Object.values(getValue).length == 0)
            ? alert ("SIMPAN")
            : alert ("NPM yang anda inputkan sudah pernah dipakai")
        ]
        };

    return (
        <>
            <title>Tambah Data Mahasiswa</title>
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className=''>NPM</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-success w-full"
                        onChange={(e) => {
                            setNPM(e.target.value);
                            checkNPM(e.target.value);
                        }} 
                    />
                </div>
                <div className='col-start-1'>Nama</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-success w-full"
                        onChange={(e) => {
                            setNAMA(e.target.value);
                        }} 
                        />
                </div>
                <div className='col-start-1'>Prodi</div>
                <div className='col-span-4'>
                    <select 
                    onChange={(e) => {
                        setProdi(e.target.value);
                    }}
                    defaultValue={""}
                    className="select select-success w-full">
                        <option disabled selected>Pilih Prodi Anda</option>
                        <option>Informatika</option>
                        <option>Sistem Informasi</option>
                        <option>Teknik Komputer</option>
                    </select>
                </div>
                <div className="col-start-2 col-span-4">
                <button className="btn btn-active btn-accent mr-5x w-100" 
                onClick={setSaveData}>
                    SIMPAN
                </button>
                <button className="btn btn-error ml-5 w-100">BATAL</button>
                </div>
            </div>
        </>
    )
}
