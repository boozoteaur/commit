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
import caseImg from '../assets/case.png'
import resident from '../assets/resident.svg'
import exp from '../assets/exp.svg'
import def from '../assets/def.svg'
import withLogo from '../assets/withLogo.png'
import axios from 'axios'


import { useState } from 'react'

const Home =()=>{
    const [consult, setConsult] = useState({
        fio: '',
        phone: '',
        email: '',
        desc: '',
        conf: false
    })
    const [left,setLeft]=useState(0)
    const [scrollPosition,setscrollPosition]=useState(0)
    const [zoom,setZoom]=useState({
        lic1:false,
        lic2:false,
        lic3:false,
        lic4:false,
        lic5:false,
        lic6:false})
    const zoomValue= {width:`${275*2.5}px`,height:`${390*2.5}px`}
    const handleScroll = (a) =>{
        if(left==-600)
        {
            if(a<0)
                return
            else
                setLeft(left+a)
        }
        if(left==0)
        {
            if(a>0)
                return
            else
                setLeft(left+a)
        }
        else 
            setLeft(left+a)
    }
    window.addEventListener('scroll', function () {
        setscrollPosition(window.scrollY);
    });
    const mail=()=>{ 
        axios.create({
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://localhost:5173',
                'Content-Type': 'application/json'
                    }})
            if(consult.conf)
                {
                axios.post('http://localhost:3000/send_mail', consult).then(res=>
                    {
                        if(res.data=='OK')
                        {
                            setConsult({
                                fio: '',
                                phone: '',
                                email: '',
                                desc: '',
                                conf: false
                            })
                        }
                    })
                }
        }
            
            
    return(
    <div className='homeContainer' onClick={()=>zoom?setZoom(false):{}}> 
        <div className='hero'>
            <div className='leftSide'>
                <div className='leftSide1'>все наши специалисты имеют профессиональное образование и опыт более 15 лет работы</div>
                <div className='leftSide2'>Программное обеспечение <a>без рисков</a> — полный цикл разработки и технической поддержки</div>
                <div className='leftSide3'>Берём ответственность за ваши ИТ-решения, снимая риски и операционную нагрузку, выступая надёжным технологическим партнёром по разработке и сопровождению</div>
                <div className='leftSide4'><Button onClick={()=>{ var el= document.getElementById('form'); el.scrollIntoView({ behavior: 'smooth' })}}margin="0px" padding="14px 26px" color='#1C8EFF' text='Консультация' logo2={arrow}/></div>
                <div className='leftSide5'><img src={star}/> Работаем с такими языками программирования, как:</div>
                <img style={{width:'176px'}}src={programs}/>
                <div className='leftSide5'><img src={star}/> Работаем с такими программами, как:</div>
                <img style={{width:'176px'}}src={programs2}/>
            </div>
            <img className='backround'src={background}/>
        </div>
        <div className='benefit'>
            <div className='title'><Title color='#1C8EFF' text="Преимущества "/> <Title text="работы с нами"/></div>
            <div className='benefitCarousel' style={scrollPosition>=600?{animation: 'slide 3s linear',columnGap:'0px'}:{}}>
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
        <img className='homeElement' id='about'src={iPad}/>
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
        <div className='productContainer' id='product'>
            <div className='title'><Title color='#1C8EFF' text="Ключевые программные "/> <Title text="продукты собственной разработки"/></div>
            <div className='listGrid'>
                <div className='listItemBg'>
                    <div className='listItem'> 
                        <img className='productImage' src="src\assets\1-кв.jpg"/>
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
                        <img className='productImage' src="src\assets\2-юр.jpg"/>
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
                    <img className='productImage' src="src\assets\3-сб.jpg"/>
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
                        <img className='productImage' src="src\assets\4-ик.jpg"/>
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
                        <img className='productImage' src="src\assets\5-то.jpg"/>
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
                        <img className='productImage' src="src\assets\6-ас.jpg"/>
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
        <div className='services' id='services'>
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
                        <div style={{fontSize:"16px",color:"#828282"}}><img src={star}/> Наши услуги ориентированы на долгосрочную ценность: мы не просто реализуем отдельные задачи, a <a style={{color:"#1C8EFF"}}>выстраиваем технологическую основу для роста, масштабирования и развития бизнеса</a>. Надёжность, контроль и ответственность — ключевые принципы нашей работы.</div>
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
        <div className='license' id='profolio' >
            <div className='container' >
                <div className='title'>
                    <Title color='#1C8EFF' text="Наши "/> 
                    <Title text="лицензии и сертификаты"/>
                </div>
                <div className='licenseCarousel' id='carousel' style={{left:`${left}px`}}> 
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic1:!zoom.lic1})} style={zoom.lic1?zoomValue:{}}>
                        <img src="\assets\d14f85c9e9e52cebca0f31afe4f4e9e2976c3c08.png"/>
                    </div>
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic2:!zoom.lic2})} style={zoom.lic2?zoomValue:{}}>
                        <img src="\assets\27160338aefc41b9058bb49d169822fbbde3d3d4.png"/>
                    </div>
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic3:!zoom.lic3})} style={zoom.lic3?zoomValue:{}}>
                        <img src="\assets\563efb0684467103cfa9d7336337d5acffd8aa2a.png"/>
                    </div>
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic4:!zoom.lic4})} style={zoom.lic4?zoomValue:{}}>
                        <img src="\assets\7b0ce6962d725589a38fcd6a9e7aba0fe67f8bfe.png"/>
                    </div>
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic5:!zoom.lic5})} style={zoom.lic5?zoomValue:{}}>
                        <img src="\assets\4ae1051048c0f08efd49fa90980d3dbaf97338c8.png"/>
                    </div>
                    <div className='licenseItem' onClick={()=>setZoom({...zoom,lic6:!zoom.lic6})} style={zoom.lic6?zoomValue:{}}>
                        <img src="\assets\3f0b3921e9d44a9caeb6a33225b78ec142a99bd2.png"/>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='button'  onClick={()=>handleScroll(300)}>
                        <img src={arrowButton}/>
                    </div>
                    <div className='button' onClick={()=>handleScroll(-300)}>
                        <img style={{transform: "rotate(180deg)"}}src={arrowButton}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='case' id='case'>
            <div className='title'>
                <Title text="Главный"/> 
                <Title color='#1C8EFF' text="кейс"/>
            </div>
            <div className='container'>
                <div className='left'>
                    <div className='topContainer'>
                        <div className='top'>
                            Цифровая трансформация
                        </div>
                        <Title size="36px" color="white" text="ГУП «ЖКХ РС(Я)» "/>
                        <Title weight="400" size="16px" color="white" text="Комплексная цифровизация жилищно-коммунального одного из крупных предприятий РС(Я)"/>
                    </div>
                    <img src={caseImg}/>
                </div>
                <div className='right'>
                    <div className='Rightcontainer'>
                        <div className='containerItembg'>
                            <div className='containerItem'> 
                                <Title size="22px" color="black" text="Основная задача:"/>
                                <Title size="16px" color="#828282" text="Реализация стратегии цифровой трансформации"/>
                            </div>
                        </div>
                        <div className='containerItembg'>
                            <div className='containerItem'>
                                <Title size="22px" color="black" text="Выполненные работы:"/>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Модернизация биллинговых систем (физ. и юр. лица)"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Внедрение ПО «Топливо и транспорт»"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Запуск чат-бота и личного кабинета"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Модернизация серверного оборудования"/>
                                </div>
                                <div className='gridNoteItem'>
                                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Внедрение IP-телефонии"/>
                                </div>
                            </div>
                        </div>
                        <div className='containerItembg2'>
                            <div className='containerItem2'> 
                                <Title size="22px" color="white" text="Результат:"/>
                                <Title size="16px" color="white" text="Сокращение времени обработки платежей на 60%, полное импортозамещение базового ПО, интеграция с ГИС ЖКХ"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='formContainer' id='form'>
            <div className='form'>
                <div className='title'>
                    <Title text="Обсудить"/> 
                    <Title color='#1C8EFF' text="проект"/>
                </div>
                 <Title color='#828282' size='16px' text="От концепции до релиза — подберём оптимальную стратегию разработки за 1 рабочий день"/>
                 <div className='gridNoteItem'>
                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Ответим в течение 1 рабочего дня"/>
                </div>
                    <div className='gridNoteItem'>
                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Оценка стоимости и сроков"/>
                </div>
                    <div className='gridNoteItem'>
                    <img className='noteLogo' src={check}/> <Title color='#828282' size='16px' text="Обсудим формат сотрудничества"/>
                </div>
                <input className='input' onChange={(e)=>{setConsult({...consult, fio:e.target.value})}} value={consult.fio} required placeholder='Введите ваше имя *'/>
                <input className='input' onChange={(e)=>{setConsult({...consult, phone:e.target.value})}} value={consult.phone} type='number' required placeholder='8(000)000-00-00 *'/>
                <input className='input' type='email' onChange={(e)=>{setConsult({...consult, email:e.target.value})}} value={consult.email} required placeholder='mail@company.ru *'/>
                <div className='textareaContainer'>
                    <textarea onChange={(e)=>{setConsult({...consult, desc:e.target.value})}} value={consult.desc} required id='textarea' rows="5" cols="30" />
                    <label for="textarea">Опишите вашу ситуацию</label>
                </div>
                <div className='checkBox'>
                    <input onChange={(e)=>{setConsult({...consult, conf:e.target.checked})}} checked={consult.conf}className='chek' required type='checkbox' />
                    <div className='policy'>
                        Я согласен(-на) с условиями {' '}
                        <a href=''>Политики конфиденциальности</a>{' '}
                         и разрешаю обработку моих персональных данных согласно{' '}
                        <a href=''>Политике обработки персональных данных</a>

                    </div>
                </div>
                <Button disabled={(consult.phone=='')||(consult.email=='')||(consult.desc=='')||(consult.fio=='')||(!consult.conf)} onClick={mail} margin='0px'color='#1C8EFF' text={'Оставить заявку'}/>
                <div className='acceptance'>
                    Отправляя форму, вы даёте согласие на обработку ваших персональных данных (ФИО, номер телефона, электронную почту и комментарий) для связи c вами и обработки вашей заявки. Данные будут храниться в течение <a>12 месяцев</a>. Вы можете отозвать своё согласие в любой момент.
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    
                    <Title color='#1C8EFF' size='12px' text="{1}"/> 
                    <div className='list'>
                        <div className='item'>
                            <img src={resident}/>
                            <div>
                                <Title size='22px' text="110+ компаний"/> 
                                <Title color='#828282' size='16px' text="Уже доверили нам разработку ПО"/> 
                            </div>
                        </div>
                        <div className='item'>
                            <img src={exp}/>
                            <div>
                                <Title size='22px' text="15+ лет опыта"/> 
                                <Title color='#828282' size='16px' text="Оценка стоимости и сроков"/> 
                            </div>
                        </div>
                    </div>
                    <div className='security'>
                        <div className='cnt'>
                            <div className='list'>
                                <img src={def}/>
                                <div>
                                    <Title size='22px' text="Ваши данные под защитой"/> 
                                </div>
                            </div>
                            <Title color='#828282' size='16px' text="Мы используем SSL-шифрование и обеспечиваем полную защиту ваших данных"/> 
                            
                        </div>
                    </div>
                    <img src={withLogo}/>
                </div>
            </div>
        </div>
    </div>
   
    )
    
}
export default Home