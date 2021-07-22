import React from 'react';
import { Link } from 'react-router-dom';


    function home()
    {
        return (
            <header className='header'>
            <strong>상단</strong>
                <div className='login'>
                    <a style={{color: "#FFF0F0", textAlige:"center"}} href='./login'>로그인</a>
                </div>
            </header>
        );
    } 



export default home;
