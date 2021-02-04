import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './demo3.scss';

function Demo3() {
    // 跳頁元件
    let history = useHistory();

    useEffect(()=>{
        const prev = document.getElementsByClassName('prev')[0];
        const next = document.getElementsByClassName('next')[0];
        const img = document.getElementsByClassName('bird-img')[0];
        let count = 1;
        // 每三秒換下一張圖
        const autoplay = () =>{
            if(count >= 4){
                count = 1;
            }else {
                count ++;
            }
            img.src = '/img/bird' + count + '.jpg'
        }
        let imgplay = 0;
        imgplay = setInterval(()=>{
            autoplay();
            console.log('自動撥放中')
        }, 3000)
        // 上一張
        prev.addEventListener('click',function () {
            if(count <= 1){
                count = 4;
            }else {
                count --;
            }
            img.src = '/img/bird' + count + '.jpg'
        })
        // 下一張
        next.addEventListener('click',function () {
            if(count >= 4){
                count = 1;
            }else {
                count ++;
            }
            // img.src = '/img/bird${count}.jpg';
            img.src = '/img/bird' + count + '.jpg'
        })
        // 滑鼠在圖上時停止自動跳轉
        img.onmouseover = function () {
            clearInterval(imgplay);
            console.log("停止播放")
        }
        // 滑鼠離開繼續撥放
        img.onmouseout = function () {
            imgplay = setInterval(()=>{
                autoplay();
                console.log('自動撥放中')
            }, 3000)
            console.log('重新撥放')
        }

        return () =>{
            clearInterval(imgplay);
            console.log("離開頁面")
        }
    },[])

    // 跳頁
    const nextPage = () =>{
        history.push('/demo2')
    }

    return(
        <div className='demo3-main'>
            <img src='/img/bird1.jpg' alt='bird' className='bird-img'/>
            <button className='prev'>prev</button>
            <button className='next'>next</button>
            <button onClick={nextPage}>跳頁</button>
        </div>
    )
}

export  default Demo3;