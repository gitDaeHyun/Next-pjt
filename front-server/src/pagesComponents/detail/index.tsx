'use client'
import React, {useEffect,useState} from 'react'
import { useRouter } from 'next/navigation';
import depositApi from '../../apis/Deposit';
import DepositType from "../../types/getDepositType"
// import Nav from '../../components/Navbar/nav'


function Detail() {
    const router : any = useRouter();
    console.log(router)
    const id : any = router.query;
    console.log(id)
    const [loading,setLoading] = useState<boolean>(true);
    const [filter, setFilter] = useState<DepositType[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        const depositData = await depositApi();
        setFilter(depositData.data.filter((item: DepositType) => String(item.id) === id));
        setLoading(false);
      };

      fetchData();
    
    }, []);

    return (
      <div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Detail</h1>
            <table>
              <tbody>
                {filter.map((item: DepositType) => (
                    <tr key={item.id}>
                      <td>{item.kor_co_nm}</td>
                    </tr>
                    ))}                   
              </tbody>
            </table>
          </>
        )}
    </div>
    )
}


export default Detail;