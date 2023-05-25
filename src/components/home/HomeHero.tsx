import { Button } from '@mui/material';
import Hero from '../../assets/images/hero.png';
import { useNavigate } from 'react-router-dom';


export default function HomeHero() {
    let navigate = useNavigate()
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
                        <Button variant='contained' color='primary' onClick={() => navigate('/home')}>Get Started</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}