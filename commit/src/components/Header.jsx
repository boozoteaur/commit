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
                <div style={{color:'#1C8EFF' }}className='navItem'> <a href='#about'>О компании</a></div>
                <div  className='navItem'><a href='#product'>Программные продукты</a></div>
                <div className='navItem'>
                            <a href="#services">Услуги</a></div>
                <div className='navItem'> <a href="#case">Главный кейс</a></div>
                <div className='navItem'><a href="#form">Контакты</a></div>
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
