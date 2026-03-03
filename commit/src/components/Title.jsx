import '../css/Title.css'

export const Title = ({text,size,color,weight}) => {
    return (
        <div className='textElement' style={{
            fontWeight:`${weight}`,
            fontSize:`${size}`,
            color: `${color}`
        }}>{text}</div>
    )
}