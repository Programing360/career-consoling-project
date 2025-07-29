import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useLoaderData, useParams } from 'react-router-dom';
import CardShow from './CardShow';
import Footer from '../Footer/Footer';
import { AuthContextData } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const CardDetails = () => {
    const {loading} = useContext(AuthContextData)
    const data = useLoaderData()
    const {id} = useParams()
    const num = parseInt(id)
    
    const [dataList, setDataList] = useState({})
    useEffect(() => {
     const p = data.find(list => list.id === num)
     setDataList(p)
    },[])
    return (
        <div>
            <Helmet>
                <title>Details - Career Counseling</title>
            </Helmet>
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