import { useEffect } from 'react'
import './demo2.scss'
import iPhoneS from '../../assets/iphone-small.jpg'
import iPhoneB from '../../assets/iphone-big.jpg'

function Demo2() {

    useEffect (()=>{
        let preview = document.getElementsByClassName('preview')[0]
        let mask = document.getElementsByClassName('mask')[0]
        let big = document.getElementsByClassName('big')[0]
        let imgB = document.getElementsByClassName('imgB')[0]
        // 查看 preview 區塊絕對位置
        // console.log("X", preview.offsetTop)
        // console.log("Y", preview.offsetLeft)
        preview.onmouseover = function (){
            mask.style.display = 'block';
            big.style.display = 'block';
        }

        // preview.addEventListener('mouseover', function () {
        //     mask.style.display = 'block'
        //     big.style.display = 'block'
        // })
        preview.addEventListener('mouseout', function () {
            mask.style.display = 'none'
            big.style.display = 'none'
        })
        preview.addEventListener('mousemove', function (e) {
            // 取滑鼠相對位置
            let x = e.pageX - this.offsetLeft;
            let y = e.pageY - this.offsetTop;
            // mask 移動
            let moveX = x - mask.offsetWidth / 2;
            let moveY = y - mask.offsetHeight / 2;
            // mask 最大移動距離
            let maskMax = preview.offsetWidth - mask.offsetWidth
            if(moveX <= 0){
                moveX = 0
            }else if(moveX > preview.offsetWidth - mask.offsetWidth){
                moveX = preview.offsetWidth - mask.offsetWidth;
            }
            if(moveY <= 0){
                moveY = 0
            }else if(moveY > preview.offsetHeight - mask.offsetHeight){
                moveY = preview.offsetHeight - mask.offsetHeight;
            }
            mask.style.left =  moveX + 'px';
            mask.style.top =  moveY + 'px';

            let moveBImgX = moveX * (imgB.offsetWidth - big.offsetWidth) / maskMax;
            let moveBImgY = moveY * (imgB.offsetHeight - big.offsetHeight) / maskMax;
            imgB.style.left = - moveBImgX + 'px';
            imgB.style.top = - moveBImgY + 'px';

        })
    },[])

    return(
        <div className='demo2'>
            DEMO2
            <div className='preview'>
                <img src={iPhoneS} alt="iphone"/>
                <div className='mask'></div>
                <div className='big'>
                    <img src={iPhoneB} alt="iphone" style={{width: '800px'}} className='imgB'/>
                </div>
            </div>
        </div>
    )
}

export default Demo2