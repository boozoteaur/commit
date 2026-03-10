import { AppLogo,Title } from "."
import "../css/Footer.css"



export const Footer = () => {
    return (
        <div className="bg">
            <div className="cnt">
                <div className="info">
                    <div className="infoL">
                        <AppLogo/>
                        <Title color="#828282" size='16px' text="Разработка и сопровождение программного обеспечения для сферы ЖКХ и государственных организаций"/>
                    </div>
                    <div className="infoR"> 
                        <div className="col">
                            <Title  size='22px' text="Компания"/>
                            <a href="#about">О компании</a>
                            <a href="#product">Программные продукты</a>
                            <a href="#services">Услуги</a>
                            <a href="#profolio">Портфолио</a>
                        </div>
                        <div className="col">
                            <Title size='22px' text="Контакты"/>
                            <Title color="#828282" size='16px' text="commit23@mail.ru"/>
                            <Title color="#828282" size='16px' text="+7(914)273-90-20"/>
                        </div>
                        <div className="col">
                            <Title  size='22px' text="Юридический адрес"/>
                            <Title color="#828282" size='16px' text="677021, Республика Саха (Якутия),г. Якутск, ул. К.Д. Уткина, д. 20, стр. 1"/>
                        </div>
                    </div>
                </div>
                <div className="line">
                </div>
                <div className="info2">
                    <div className="req">
                            <Title color="#828282" size='16px' text="ООО «КОММИТ»"/>
                            <Title color="#828282" size='16px' text="ИНН 1400023251"/>
                            <Title color="#828282" size='16px' text="ОГРН 1231400006232"/>

                    </div> 
                    <div className="policy">
                           <a >Политика конфиденциальности </a>
                           <a >Политика обработки персональных данных</a>
                    </div>
                </div>
                <Title color="#828282" size='16px' text="Ⓒ 2026 Все права защищены. Информация на сайте имеет исключительно справочно-маркетинговую направленность и не является публичной офертой"/>
                            
            </div>
            
            <div>

            </div>
        </div>
    )
}
