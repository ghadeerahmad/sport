import Hero from '../../assets/images/hero.png';

export default function HomeHero() {
    return (
        <div className="container d-flex" style={{
            height: '100vh',
            justifyContent: 'space-evenly',
        }}>
            <div className='row justify-content-center' style={{ alignItems: 'center' }}>
                <div className='col-md-5'>
                    <img src={Hero} className='hero-image' />

                </div>
                <div className='col-md-7'>
                    <div className='hero-text'>
                        <h1>Football news</h1>
                        <p>all football new are now in one place</p>
                    </div>

                </div>
            </div>
        </div>
    )
}