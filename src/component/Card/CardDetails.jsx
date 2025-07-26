import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useLoaderData, useParams } from 'react-router-dom';
import CardShow from './CardShow';
import Footer from '../Footer/Footer';
import { AuthContextData } from '../../provider/AuthProvider';

const CardDetails = () => {
    const {loading} = useContext(AuthContextData)
    const data = useLoaderData()
    const {id} = useParams()
    const num = parseInt(id)
    // console.log(typeof num)
    const [dataList, setDataList] = useState({})
    // console.log(dataList)
    useEffect(() => {
     const p = data.find(list => list.id === num)
     setDataList(p)
    },[])
    return (
        <div>
            <NavBar></NavBar>
            <div className='mb-8'>
                {
                    loading ? <p>Loading</p> : <CardShow data={dataList}></CardShow>
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;