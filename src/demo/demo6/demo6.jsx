import './demo6.scss'

function Demo6() {

    const test = () =>{
        // let data = document.getElementById('form')
        console.log('data')
    }

    return(
        <div className='demo6-main'>
            毛玻璃測試
            <div className="demo6-filter">
                <div className="filter-header">
                    註冊測試
                </div>
                <form onSubmit={test}>
                    <input type="text" placeholder="請輸入帳號"/>
                    <input type="text" placeholder="請輸入密碼"/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    )
}

export default Demo6;