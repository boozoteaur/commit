import '../css/Header.css' 
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import {
    AppLogo,Button
} from '.'

export const Header = () => {
    
    return (
        <div className='header' >
            <AppLogo/>
            <div className='nav'>
                <div style={{color:'#1C8EFF' }}className='navItem'>О компании</div>
                <div  className='navItem'>Программные продукты</div>
                <div className='navItem'>Услуги</div>
                <div className='navItem'>Главный кейс</div>
                <div className='navItem'>Контакты</div>
            </div>
            <div className='contact'> 
                <div style={{width:'146px'}}>
                    <Button  color="#1C8EFF" logo1={phone} text ='Позвонить нам'/>  
                </div>
                <div>
                    <Button color="black" logo1={mail}  text ='Написать нам'/>
                </div>
            </div>
        </div>
    )
}
