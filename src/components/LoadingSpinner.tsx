import '../assets/css/style.css';


export default function LoadingSpinner({ width, height, style }: any) {
    return (
        <div className='text-center' style={style}>
            <span className="loader"
                style={{ width: width ?? '48px', height: height ?? '48px' }}
            ></span>
        </div>
    )
}