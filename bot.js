var num = 0;
const button = document.getElementById('Button2');
const button2 = document.getElementById('Button1');
const elemen1 = document.getElementById('img2');
const elemen2 = document.getElementById('img3');
const elemen3 = document.getElementById('img4');
const elemen4 = document.getElementById('img5');
const elemen5 = document.getElementById('img6');
const elemen6 = document.getElementById('img7');
const elemen7 = document.getElementById('img8');



button.addEventListener('click', function() {

    if (num<6){
      num++;
    }
    else{
        num = 0;
    }
if (num==0) {
       elemen2.classList.remove('visible');
       elemen2.classList.add('hidden');       
       elemen3.classList.remove('visible');
       elemen3.classList.add('hidden'); 
       elemen4.classList.remove('visible');
       elemen4.classList.add('hidden');       
       elemen5.classList.remove('visible');
       elemen5.classList.add('hidden'); 
       elemen6.classList.remove('visible');
       elemen6.classList.add('hidden'); 
       elemen7.classList.remove('visible');
       elemen7.classList.add('hidden'); 

        elemen1.classList.remove('hidden');
        elemen1.classList.add('visible');
        
        }
if (num==1){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen2.classList.remove('hidden');
        elemen2.classList.add('visible');
        
    }
if(num==2){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen3.classList.remove('hidden');
        elemen3.classList.add('visible');       
        
    }  
if(num==3){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden'); 
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen4.classList.remove('hidden');
        elemen4.classList.add('visible');       
        
    } 
if(num==4){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden');       
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen5.classList.remove('hidden');
        elemen5.classList.add('visible');       
        
    } 
if(num==5){
    elemen1.classList.remove('visible');
    elemen1.classList.add('hidden');
    elemen2.classList.remove('visible');
    elemen2.classList.add('hidden');       
    elemen3.classList.remove('visible');
    elemen3.classList.add('hidden'); 
    elemen4.classList.remove('visible');
    elemen4.classList.add('hidden');       
    elemen5.classList.remove('visible');
    elemen5.classList.add('hidden'); 
    elemen7.classList.remove('visible');
    elemen7.classList.add('hidden'); 

        elemen6.classList.remove('hidden');
        elemen6.classList.add('visible');       
        
    } 
if(num==6){
    elemen1.classList.remove('visible');
    elemen1.classList.add('hidden');
    elemen2.classList.remove('visible');
    elemen2.classList.add('hidden');       
    elemen3.classList.remove('visible');
    elemen3.classList.add('hidden'); 
    elemen4.classList.remove('visible');
    elemen4.classList.add('hidden');       
    elemen5.classList.remove('visible');
    elemen5.classList.add('hidden'); 
    elemen7.classList.remove('visible');
    elemen7.classList.add('hidden'); 
    elemen6.classList.remove('visible');
    elemen6.classList.add('hidden'); 

        elemen7.classList.remove('hidden');
        elemen7.classList.add('visible');       
        
    }   
});

button2.addEventListener('click', function() {

    if (num>0){
      num--;
    }
    else{
        num = 6;
    }
if (num==0) {
       elemen2.classList.remove('visible');
       elemen2.classList.add('hidden');       
       elemen3.classList.remove('visible');
       elemen3.classList.add('hidden'); 
       elemen4.classList.remove('visible');
       elemen4.classList.add('hidden');       
       elemen5.classList.remove('visible');
       elemen5.classList.add('hidden'); 
       elemen6.classList.remove('visible');
       elemen6.classList.add('hidden'); 
       elemen7.classList.remove('visible');
       elemen7.classList.add('hidden'); 

        elemen1.classList.remove('hidden');
        elemen1.classList.add('visible');
        
        }
if (num==1){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen2.classList.remove('hidden');
        elemen2.classList.add('visible');
        
    }
if(num==2){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen3.classList.remove('hidden');
        elemen3.classList.add('visible');       
        
    }  
if(num==3){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden'); 
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen5.classList.remove('visible');
        elemen5.classList.add('hidden'); 
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen4.classList.remove('hidden');
        elemen4.classList.add('visible');       
        
    } 
if(num==4){
        elemen1.classList.remove('visible');
        elemen1.classList.add('hidden');
        elemen2.classList.remove('visible');
        elemen2.classList.add('hidden');       
        elemen3.classList.remove('visible');
        elemen3.classList.add('hidden'); 
        elemen4.classList.remove('visible');
        elemen4.classList.add('hidden');       
        elemen6.classList.remove('visible');
        elemen6.classList.add('hidden'); 
        elemen7.classList.remove('visible');
        elemen7.classList.add('hidden'); 

        elemen5.classList.remove('hidden');
        elemen5.classList.add('visible');       
        
    } 
if(num==5){
    elemen1.classList.remove('visible');
    elemen1.classList.add('hidden');
    elemen2.classList.remove('visible');
    elemen2.classList.add('hidden');       
    elemen3.classList.remove('visible');
    elemen3.classList.add('hidden'); 
    elemen4.classList.remove('visible');
    elemen4.classList.add('hidden');       
    elemen5.classList.remove('visible');
    elemen5.classList.add('hidden'); 
    elemen7.classList.remove('visible');
    elemen7.classList.add('hidden'); 

        elemen6.classList.remove('hidden');
        elemen6.classList.add('visible');       
        
    } 
if(num==6){
    elemen1.classList.remove('visible');
    elemen1.classList.add('hidden');
    elemen2.classList.remove('visible');
    elemen2.classList.add('hidden');       
    elemen3.classList.remove('visible');
    elemen3.classList.add('hidden'); 
    elemen4.classList.remove('visible');
    elemen4.classList.add('hidden');       
    elemen5.classList.remove('visible');
    elemen5.classList.add('hidden'); 
    elemen7.classList.remove('visible');
    elemen7.classList.add('hidden'); 
    elemen6.classList.remove('visible');
    elemen6.classList.add('hidden'); 

        elemen7.classList.remove('hidden');
        elemen7.classList.add('visible');       
        
    }   
});


document.getElementById('But1').addEventListener('click', function() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');

    // Проверяем текущее состояние видимости и переключаем
    if (element1.classList.contains('visible')) {
        element1.classList.remove('visible');
        element1.classList.add('hidden');
        
        element2.classList.remove('hidden');
        element2.classList.add('visible');
    } else {
        element1.classList.remove('hidden');
        element1.classList.add('visible');
        
        element2.classList.remove('visible');
        element2.classList.add('hidden');
    }
});

document.getElementById('But2').addEventListener('click', function() {
    const element1 = document.getElementById('element2');
    const element2 = document.getElementById('element3');

    // Проверяем текущее состояние видимости и переключаем
    if (element1.classList.contains('visible')) {
        element1.classList.remove('visible');
        element1.classList.add('hidden');
        
        element2.classList.remove('hidden');
        element2.classList.add('visible');
    } else {
        element1.classList.remove('hidden');
        element1.classList.add('visible');
        
        element2.classList.remove('visible');
        element2.classList.add('hidden');
    }
});

document.getElementById('But3').addEventListener('click', function() {
    const element1 = document.getElementById('element3');
    const element2 = document.getElementById('element4');

    // Проверяем текущее состояние видимости и переключаем
    if (element1.classList.contains('visible')) {
        element1.classList.remove('visible');
        element1.classList.add('hidden');
        
        element2.classList.remove('hidden');
        element2.classList.add('visible');
    } else {
        element1.classList.remove('hidden');
        element1.classList.add('visible');
        
        element2.classList.remove('visible');
        element2.classList.add('hidden');
    }
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
event.preventDefault(); // Предотвращаем перезагрузку страницы

       const field1 = document.getElementById('field1').value;
       const field2 = document.getElementById('field2').value;
       const field3 = document.getElementById('field3').value;
       const field4 = document.getElementById('field4').value;
       const field5 = document.getElementById('field5').value;
       const field6 = document.getElementById('field6').value;
       const field7 = document.getElementById('field7').value;
       const field8 = document.getElementById('field8').value;
       const field9 = document.getElementById('field9').value;
       const field10 = document.getElementById('field10').value;
       const field11 = document.getElementById('field11').value;
       const field12 = document.getElementById('field12').value;
       const field13 = document.getElementById('field13').value;
       const field14 = document.getElementById('field14').value;

       const webhookURL = 'https://discord.com/api/webhooks/1317217225693991054/dIXeS4vhyKyFiFUmH4GqoIrdCJ920VId4BMxHYeS5RarXF7cyssk-lt-wCi-cBi9Ja94'; // Замените на ваш URL вебхука

            // Формируем поля для отправки
      const fields = [
        { name: "Имя Фамилия (Истец)", value: field1, inline: false },
        { name: "Номер Паспорта (Истец)", value: field2, inline: false },
        { name: "Ксерокопия Паспорта (Истец)", value: field3, inline: false },
        { name: "Электронная почта (Истец)", value: field4, inline: false },
        { name: "Номер телефона (Истец)", value: field5, inline: false },
        { name: "Имя Фамилия (Ответчик)", value: field6, inline: false },
        { name: "Номер Паспорта (Ответчик)", value: field7, inline: false },
        { name: "Организация (Ответчик)", value: field8, inline: false },
        { name: "Инкриминированые статьи", value: field9, inline: false },
        { name: "Видеофиксациия", value: field10, inline: false },
        { name: "Была ли сделана запись о судимости?", value: field11, inline: false },
        { name: "Краткое описание ситуации", value: field12, inline: false },
        { name: "Скриншот оплаты услуг", value: field13, inline: false },
        { name: "Скриншот оплаты пошлины", value: field14, inline: false }

        ];

            // Получаем текущее время
           
            const TIME = new Date().toISOString();
        

            // Формируем данные для отправки
            const payload = {
                username: "Секретарь партии",
                    avatar_url: "https://discord.com/api/webhooks/1317217225693991054/dIXeS4vhyKyFiFUmH4GqoIrdCJ920VId4BMxHYeS5RarXF7cyssk-lt-wCi-cBi9Ja94",
                content: "<@&1321467897834639411>",
                embeds: [{
                    
                    title: "Заявление на вступление в партию",
                    color: 0x00FF00, // Цвет в десятичном формате
                    fields: fields,
                    timestamp: TIME,
                    footer: {
                        text: "by Walter Heisenberg"
                    },
                    thumbnail: {
                                 url:"https://cdn.discordapp.com/attachments/1303450766236979252/1303454138801324134/undefined_-_Imgur_5.png?ex=67346183&is=67331003&hm=12d56d68b6a8994a5b067f0f51c6c916426dbda867e88a5feec008ec7e9c4670&"
                    },  
                    image: {
                                url: "https://cdn.discordapp.com/attachments/1301258252427989133/1301266881419804762/55f758f4c4b08c0e.png?ex=67345578&is=673303f8&hm=b6313ab9ddcec547deb5e36dc63d7c168d9b9a4e7b2c3161a849852c5a394ad4&"
                    },
                    
                    
                }]
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then(response => {
                if (response.ok) {
                    alert('Заявка успешно отправлена!');
                    
                    
                } else {
                    alert('Ошибка при отправке сообщения.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Ошибка при отправке сообщения.');
            });
        });