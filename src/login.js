import React, { Component } from 'react';
import Axios from "axios";

class login extends Component {
    /* id password state값 으로 정의 */
    state = {
        id: '',
        password: ''
    }
    /* input value 변경 ==> onChange */
    appChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    /* 로그인 버튼 클릭 ==> onClick */

    appClick = () => {

        console.log(`id는:${this.state.id} pw는 : ${this.state.password}`);
        Axios({
            headers: {
                Token:'testToken',
            },
            method: "post",
            changeOrigin: true,
            url: "http://localhost:5000/api/auth/signin",
            data : {
                name : this.state.id,
                password : this.state.password
            },
            responseType: "json"
        }).then(function (response) {
            if (response.status == 200) {
                console.log('성공');
                document.location.replace('/home');
            }
        }).catch(error=>{
            console.log('실패');
        });

    }
    appKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.appClick();
        }
    }

    render() {
        const { id, password } = this.state;
        const { appChange, appClick, appKeyPress } = this;
        return (
            <div className="App">
                <input type="text" name="id" placeholder="아이디" value={id} onChange={appChange} />
                <input type="password"
                       name="password"
                       placeholder="비밀번호"
                       value={password}
                       onChange={appChange}
                       onKeyPress={appKeyPress}
                />
                <button onClick={appClick}>로그인</button>
            </div>
        );
    }
}

export default login;