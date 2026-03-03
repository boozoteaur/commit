import '../css/Button.css' 

export const Button=({onClick,text,logo1,logo2,fontColor='#ffffff',color='#2b6cb0',padding,margin}) => {
    return (
        <div className='button'
        onClick={onClick}
            style={{
                margin:`${margin}`,
                padding:`${padding}`,
                color:`${fontColor}`,
                backgroundColor: `${color}`}}>
           {logo1?<img className='logo' src={logo1}/>:''}{text}{logo2?<img className='logo' src={logo2}/>:''}
        </div>
    )
}