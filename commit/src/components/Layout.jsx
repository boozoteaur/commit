import './../css/Layout.css'
import {
    Header,
    Footer,
    Padding
} from '.'


const Layout = ({ children, ...props }) => {
    return (
        <Padding>
            <Header/>
            <div className='content'>
                <div className="inside">{children}</div>
            </div>
            <Footer/>
        </Padding>
    )
}

export default Layout
