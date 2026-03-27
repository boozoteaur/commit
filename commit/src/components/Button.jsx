import '../css/Button.css' 

export const Button=({onClick,text,logo1,logo2,fontColor='#ffffff',color='#2b6cb0',padding,margin,disabled}) => {
    console.log(disabled)
    return (
        
        <div className={`button${disabled?'Off':''}`}
            onClick={disabled?()=>{}:onClick}
            style={{
                disabled:`${disabled}`,
                margin:`${margin}`,
                padding:`${padding}`,
                color:`${disabled?'#424242':fontColor}`,
                backgroundColor: `${disabled?'#999999':color}`}}>
           {logo1?<img className='logo' src={logo1}/>:''}{text}{logo2?<img className='logo' src={logo2}/>:''}
        </div>
    )
}