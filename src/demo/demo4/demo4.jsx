import { useEffect } from "react";
import './demo4.scss'

function Demo4() {

    // 頁面啟動後執行
    useEffect(() =>{

        let sel1 = document.getElementById('sel1');
        let sel2 = document.getElementById('sel2');
        let addAll = document.getElementsByClassName('demo4-btn')[0];
        let addOne = document.getElementsByClassName('demo4-btn')[1];
        let removeAll = document.getElementsByClassName('demo4-btn')[2];
        let removeOne = document.getElementsByClassName('demo4-btn')[3];
        // 移動全部
        function moveAll(selone, seltwo) {
            const opts = selone.getElementsByTagName('option')
            const len = opts.length
            for (let i = 0; i < len; i++){
                seltwo.appendChild(opts[0])
            }
        }
        // 移動選中項
        function moveOne(selone, seltwo) {
            let opts = selone.getElementsByTagName('option')
            const len = opts.length
            for (let i = len -1; i >=0; i-- ){
                if(opts[i].selected === true){
                    seltwo.appendChild(opts[i])
                }
            }
        }
        addAll.onclick = function (){
            moveAll(sel1, sel2);
        }
        addOne.onclick = function (){
            moveOne(sel1, sel2);
        }
        removeAll.onclick = function (){
            moveAll(sel2, sel1);
        }
        removeOne.onclick = function (){
            moveOne(sel2, sel1)
        }
    },[])



    return(
        <div className='demo4-main'>
           範例 4 權限列表
            <div className='demo4-area'>
                <select id="sel1" className='demo4-sle' multiple='multiple'>
                    <option value="1">新增</option>
                    <option value="2">修改</option>
                    <option value="3">刪除</option>
                    <option value="4">下載</option>
                    <option value="5">註冊</option>
                </select>
                <div className='demo4-btn-area'>
                    <input type="button" value=">>" className='demo4-btn'/>
                    <input type="button" value=">" className='demo4-btn'/>
                    <input type="button" value="<<" className='demo4-btn'/>
                    <input type="button" value="<" className='demo4-btn'/>
                </div>
                <select id="sel2" className='demo4-sle' multiple='multiple'>
                </select>
            </div>
        </div>
    )
}

export default Demo4;