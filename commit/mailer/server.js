const  sendMail = require('./utils/mailer.js') 
const http = require('http');



const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days,
    'Content-Type': 'application/json'
    /** add other headers as per requirement */
    }

const result = {
    status: 'success'
  };

const server = http.createServer(async(req, res) => {
  // Устанавливаем код ответа и заголовки
    if (req.url=='/send_mail')
    {
        if (req.method === 'OPTIONS') {
                res.writeHead(204, headers)
                res.end()
                return
            }
        if (['POST'].indexOf(req.method) > -1) {
            let body = '';
            let response = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    sendMail({
                        to: 'vinokurov_vasiliy_dm@mail.ru',
                        subject: "Консультация",
                        text: ` ${parsed.fio} ${parsed.phone} ${parsed.email} ${parsed.desc}`,
                        html: `<p> ${parsed.fio} </p><br><p>${parsed.phone}</p><br> <p>${parsed.email} </p><br><p>${parsed.desc}</p>` ,
                    }).then(resp=>{
                        if(resp.response.includes('OK'))
                        {
                            res.writeHead(200, headers)
                            res.end(JSON.stringify('OK'))
                        }
                        
                    })
                    
                } 
                catch (e) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ message: 'Invalid JSON' }));
                }
            });
            return
        }

        res.writeHead(405, headers)
        res.end(`${req.method} is not allowed for the request.`)
        
    }
    
  // Отправляем результат как JSON
  
});

// Сервер слушает порт 3000
server.listen(3000, () => {
    try{
        console.log("Server is running on <http://localhost:3000>");}
    catch(err){
        console.log(err)
    }
});
