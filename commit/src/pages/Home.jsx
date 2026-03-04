import '../css/Home.css'
import background from '../assets/code.png'
import { Button, Title } from '../components'
import arrow from '../assets/arrow.svg'
import star from '../assets/star.svg'
import programs from '../assets/programs.png'
import programs2 from '../assets/programs2.png'
import idea from '../assets/idea.png'
import money from '../assets/money.png'
import goal from '../assets/goal.png'
import info from '../assets/info.png'
import iPad from '../assets/iPad.svg'
import vodokanal from '../assets/vodokanal.svg'
import technopark from '../assets/technopark.svg'
import gup from '../assets/gup.svg'
import muptesaldan from '../assets/muptesaldan.svg'
import xkvadrat from '../assets/x-kvadrat.svg'
import sakhaspectrans from '../assets/sakhaspectrans.svg'
import rcit from '../assets/rcit.svg'
import director from '../assets/director.svg'
import example from '../assets/example.png'
import check from '../assets/check.svg'
import service from '../assets/service.png'
import arrowButton from '../assets/arrowButton.svg'

const Home =()=>{
    
    return(
    <div className='homeContainer'> 
        <div className='hero'>
            <div className='leftSide'>
                <div className='leftSide1'>все наши специалисты имеют профессиональное образование и опыт более 15 лет работы</div>
                <div className='leftSide2'>Программное обеспечение <a>без рисков</a> — полный цикл разработки и технической поддержки</div>
                <div className='leftSide3'>Берём ответственность за ваши ИТ-решения, снимая риски и операционную нагрузку, выступая надёжным технологическим партнёром по разработке и сопровождению</div>
                <div className='leftSide4'><Button margin="0px" padding="14px 26px" color='#1C8EFF' text='Начать работу'/><Button margin="0px" padding="14px 26px" fontColor='black' color="white" text='Консультация' logo2={arrow}/></div>
                <div className='leftSide5'><img src={star}/> Работаем с такими языками программирования, как:</div>
                <img style={{width:'176px'}}src={programs}/>
                <div className='leftSide5'><img src={star}/> Работаем с такими программами, как:</div>
                <img style={{width:'176px'}}src={programs2}/>
            </div>
            <img className='backround'src={background}/>
        </div>
        <div className='benefit'>
            <div className='title'><Title color='#1C8EFF' text="Преимущества "/> <Title text="работы с нами"/></div>
            <div className='benefitCarousel'>
                <div className='BCItem'>
                    <div className='container'>
                        <Title color='#1C8EFF' size='12px' text="{1}"/> 
                        <Title color='#1E1E1E' size='22px' text="Из идеи — в работающую концепцию"/> 
                        <Title color='#828282' size='16px' text="Мы погружаемся в задачу, формируем понятную и реализуемую концепцию и сразу определяем дальнейшие шаги"/> 
                        <img style={{width:'234px'}}src={idea}/>       
                        <div></div>
                    </div>
                    
                </div>
                <div style={{left:'-50px'}} className='BCItem'>
                    <div className='container'>
                        <Title color='#1C8EFF' size='12px' text="{2}"/> 
                        <Title color='#1E1E1E' size='22px' text="Цены и процессы — без сюрпризов"/> 
                        <Title color='#828282' size='16px' text="Заранее фиксируем стоимость, этапы и зону ответственности, чтобы вы всегда понимали, за что платите и какой результат будет получен"/> 
                        <img style={{width:'234px'}}src={money}/>       
                        <div></div>
                    </div>
                </div>
                <div style={{left:'-100px'}} className='BCItem'><div className='container'>
                        <Title color='#1C8EFF' size='12px' text="{3}"/> 
                        <Title color='#1E1E1E' size='22px' text="Ориентируемся на результат"/> 
                        <Title color='#828282' size='16px' text="Каждое решение мы строим так, чтобы приносить измеримый результат и реальную ценность вашему бизнесу"/> 
                        <img style={{width:'234px'}}src={goal}/>       
                        <div></div>
                    </div></div>
                <div style={{left:'-150px'}} className='BCItem'><div className='container'>
                        <Title color='#1C8EFF' size='12px' text="{4}"/> 
                        <Title color='#1E1E1E' size='22px' text="Контролируем сбои и устраняем"/> 
                        <Title color='#828282' size='16px' text="Мы оперативно реагируем на любые сбои, быстро устраняем их и гарантируем, что ваш проект всегда остаётся под полным контролем"/> 
                        <img style={{width:'234px'}}src={info}/>       
                        <div></div>
                    </div></div>
            </div>
        </div>
        <img className='homeElement' src={iPad}/>
        <div className='partnerContainer'>
            <div className='partners'>
                <img src={vodokanal}/> 
                <img src={technopark}/> 
                <img src={gup}/> 
                <img src={muptesaldan}/> 
                <img src={xkvadrat}/> 
                <img src={sakhaspectrans}/> 
                <img src={rcit}/> 
            </div>
        </div>
        <img className='homeElement' src={director}/>
        <div className='productContainer'>
            <div className='title'><Title color='#1C8EFF' text="Ключевые программные "/> <Title text="продукты собственной разработки"/></div>
            <div className='listGrid'>
                <div className='listItemBg'>
                    <div className='listItem'> 
                        <img src={example}/>
                        <div className='gridItemText'> 
                            <Title size='22px' text="ПО «Квартплата» "/>
                            <div className='gridNote'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Автоматизация начислений и приёма платежей физических лиц "/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Ведение лицевых счётов, работа с задолженностью, интеграция с ГИС ЖКХ "/>
                                </div>
                            </div>  
                        </div>  

                    </div>
                </div>
               <div className='listItemBg'>
                    <div className='listItem'> 
                        <img src={example}/>
                        <div className='gridItemText'> 
                            <Title size='22px' text="ПО «Расчёты с юридическими лицами» "/>
                            <div className='gridNote'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Учёт договоров на поставку коммунальных услуг юрлицами, автоматический расчёт потребления, формирование счётов фактур "/>
                                </div>  
                            </div>  
                        </div>  
                    </div>
                </div>
               <div className='listItemBg'>
               <div className='listItem'> 
                    <img src={example}/>
                    <div className='gridItemText'> 
                        <Title size='22px' text="ПО «СБЫТ» "/>
                        <div className='gridNote'>
                            <div className='gridNoteItem'>
                                <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Консолидация данных, формирование плана реализации (бюджет продаж), анализ «выпадающих доходов», формирование форм для ГКЦ РС(Я) (ТХ-1, ВС-1) "/>
                            </div>  
                        </div>  
                    </div>  
                </div>
                </div>
            </div>
            <div className='listGrid'>   
                <div className='listItemBg'>
                    <div className='listItem'> 
                        <img src={example}/>
                        <div className='gridItemText'> 
                            <Title size='22px' text="ПО «Инженерно-картографическая система»  "/>
                            <div className='gridNote'>
                               <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Графическое отображение сетей тепло — и водоснабжения, а также котельных "/>
                                </div>  
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Расчёт параметров объектов, паспортизация сетей на карте"/>
                                </div>  
                            </div>  
                        </div>  
                    </div>
                </div>
                <div className='listItemBg'>
                    <div className='listItem'> 
                        <img src={example}/>
                        <div className='gridItemText'> 
                            <Title size='22px' text="ПО «Топливо и транспорт — FUEL»  "/>
                            <div className='gridNote'>
                               <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Учёт топливных ресурсов котельных, перемещений и остатков топлива "/>
                                </div>  
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Формирование форм отчётности и путевых листов "/>
                                </div>  
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Учёт мест накоплений ТКО "/>
                                </div>  
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Отказ от бумажного документооборота, аналитика расхода ТЭР "/>
                                </div>  
                            </div>  
                        </div>  
                    </div>
                </div>
               <div className='listItemBg'>
                    <div className='listItem'> 
                        <img src={example}/>
                        <div className='gridItemText'> 
                            <Title size='22px' text="ПО «АСКУУТЭ»  "/>
                            <div className='gridNote'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Сбор показаний приборов учёта тепла, контроль поверок, интеграция с разнородными системами сбора данных "/>
                                </div>  
                            </div>  
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className='services'>
            <div className='title'><Title color='#1C8EFF' text="Предоставляемые услуги "/> <Title text="нашей компании"/></div>
            
            <div className='serviceBox'>
                <div className='leftSide'>
                    <div className='background'>
                        <div className='container' >
                            <div className='top'>
                                Цифровая надёжность
                            </div>
                            <Title size="36px" color="white" text="ООО «КОММИТ»"/>
                            <Title weight="400" size="16px" color="white" text="Разработка и сопровождение программного обеспечения для сферы ЖКХ и государственных организаций"/>
                            <img style={{width: "300px", alignSelf:'center'}} src={service}/>
                        </div>
                    </div>
                    <div className='text'> 
                        <div style={{fontSize:"16px",color:"#828282"}}><img src={star}/> Наши услуги ориентированы на долгосрочную ценность: мы не просто реализуем отдельные задачи, а <a style={{color:"#1C8EFF"}}>выстраиваем технологическую основу для роста, масштабирования и развития бизнеса</a>. Надёжность, контроль и ответственность — ключевые принципы нашей работы.</div>
                    </div>
                </div>
                <div className='serviceList'>
                    <div className='serviceBg'>
                        <div className='serviceContainer'>
                            <div className='largeText'>
                                <Title size="105px"text="01"/>
                            </div><div className='middleText'>
                                <Title size="22px"text="Разработка и сопровождение ПО"/>
                            </div>
                            <div className='gridNoteList'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Адаптация и модификация систем на базе 1С, с использованием СУБД MS SQL и PostgreSQL"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Разработка аналитических отчётов и интеграционных решений"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='serviceBg'>
                        <div className='serviceContainer'>
                            <div className='largeText'>
                                <Title size="105px"text="02"/>
                            </div>
                            <div className='middleText'>
                                <Title size="22px"text="ИТ-аутсорсинг и инфраструктура"/>
                            </div>
                            <div className='gridNoteList'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Обсуждение АРМ (ПК, моноблоки), серверов и оргтехники"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Администрирование локальных сетей и IP-телефонии"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Обеспечение ИТ-безопасности (антивирусная защита, резервное копирование)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='serviceBg'>
                        <div className='serviceContainer'>
                            <div className='largeText'>
                                <Title size="105px"text="03"/>
                            </div>
                            <div className='middleText'>
                                <Title size="22px"text="Импортозамещение"/>
                            </div>
                            <div className='gridNoteList'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Поставка оборудования (серверы, периферия) из Единого реестра российской радиоэлектронной продукции (ПП РФ № 878)"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Перевод инфраструктуры на отечественное ПО (Astra Linux, P7-Офис и др.)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='serviceBg'>
                        <div className='serviceContainer'>
                            <div className='largeText'>
                                <Title size="105px"text="04"/>
                            </div>
                            <div className='middleText'>
                            <Title size="22px"text="1С: Франчайзинг"/>
                            </div>
                            <div className='gridNoteList'>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Продажа лицензий, внедрение и доработка конфигураций (1С: Управление холдингом, 1С: ЗУП, 1С: Бухгалтерия)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='license'>
            <div className='container'>
                <div className='title'>
                    <Title color='#1C8EFF' text="Наши "/> 
                    <Title text="лицензии и сертификаты"/>
                </div>
                <div className='licenseCarousel'> 
                    <div className='licenseItem'>
                        <img src="\src\assets\d14f85c9e9e52cebca0f31afe4f4e9e2976c3c08.png"/>
                    </div>
                    <div className='licenseItem'>
                        <img src="\src\assets\27160338aefc41b9058bb49d169822fbbde3d3d4.png"/>
                    </div>
                    <div className='licenseItem'>
                        <img src="\src\assets\563efb0684467103cfa9d7336337d5acffd8aa2a.png"/>
                    </div>
                    <div className='licenseItem'>
                        <img src="\src\assets\7b0ce6962d725589a38fcd6a9e7aba0fe67f8bfe.png"/>
                    </div>
                    <div className='licenseItem'>
                        <img src="\src\assets\4ae1051048c0f08efd49fa90980d3dbaf97338c8.png"/>
                    </div>
                    <div className='licenseItem'>
                        <img src="\src\assets\3f0b3921e9d44a9caeb6a33225b78ec142a99bd2.png"/>
                    </div>
                </div>
                <div className='buttons'>
                    <div>
                        <img src={arrowButton}/>
                    </div>
                    <div>
                        <img style={{transform: "rotate(180deg)"}}src={arrowButton}/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
            </div><div>
            </div><div>
            </div><div>
            </div>
            </div>
            </div>
            <div>

            </div>
            </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
   
    )
    
}
export default Home