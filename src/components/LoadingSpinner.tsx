import '../assets/css/style.css';
import { CSSProperties } from 'react'

interface props {
    size?: number | undefined,
    style?: CSSProperties | undefined
}

export default function LoadingSpinner({ size, style }: props) {
    return (
        <div className='text-center' style={style}>
            <span className="loader"
                style={{ width: size ?? '48px', height: size ?? '48px' }}
            ></span>
        </div>
    )
}