import './home.scss'


function Home() {
    return(
        <div className='main'>
            home
            <ul>
                <li>
                    <a href="#" className='a1'>小米手機</a>
                    <div className='hovertest'>
                        1
                    </div>
                </li>
                <li>
                    <a href="#" className='a1'>紅米手機</a>
                    <div className='hovertest'>
                        2
                    </div>
                </li>
                <li>
                    <a href="#" className='a1'>智慧家庭</a>
                    <div className='hovertest'>
                        3
                    </div>
                </li>
                <li>
                    <a href="#" className='a1'>智慧科技</a>
                    <div className='hovertest'>
                        4
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Home;