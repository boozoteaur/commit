import './../css/Layout.css'
import {
    Header,
    Footer,
    Padding
} from '.'


const Layout = ({ children, ...props }) => {
    return (
    <>
        <Padding>
            <Header/>
            <div className='content'>
                <div className="inside">{children}</div>
            </div>
            
        </Padding>
        <Footer/>
    </>
    )
}

export default Layout
