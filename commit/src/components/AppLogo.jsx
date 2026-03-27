// import Logo from "../assets/logo.svg"
import Logo from "../assets/logo-commit.png"

export const AppLogo = () => {
    return (
        <div >
            <a href={'/'}>
                <img style={{width: '192px'}} src={Logo}/>
            </a>
        </div>
    )
}