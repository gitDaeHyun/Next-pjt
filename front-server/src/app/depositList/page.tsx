'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import depositApi from '../../apis/Deposit';
import DepositType from "../../types/getDepositType"
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

// export interface Details {
//     deposit : Deposit[];
//     getDeposit : () => void;
// }

// export const useDeposit = create<Details>()(persist((set) => ({
//     deposit : [],

//     getDeposit: async () => {
//         const json = await (await fetch(`http://127.0.0.1:8000/finlife/deposit-products/`)).json();
//         set(() => ({ deposit: json }));
    
//   }}),{
//     name : 'DepositPersist',
//     getStorage : () => localStorage
//   }));

function DepositList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [deposit, setDeposit] = useState<DepositType[]>([]);

 
  useEffect(() => {
    const fetchData = async() => {
      const depositData = await depositApi();
      setDeposit(depositData.data);
      
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <tbody>
              {deposit.map((deposit: DepositType) => (
                <tr key={deposit.id}>
                  <td>{deposit.kor_co_nm}</td>
                  <td>
                    <Link href={{
                      pathname : `/detail/[id]/`,
                      query : {id : deposit.id},
                    }} as= {`/detail/${deposit.id}`}
                    >{deposit.fin_prdt_nm}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DepositList;