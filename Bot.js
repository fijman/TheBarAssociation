document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const field3 = document.getElementById('field3').value;
    const field4 = document.getElementById('field4').value;
    const field5 = document.getElementById('field5').value;
    const field6 = document.getElementById('field6').value;
    const webhookURL = 'https://discord.com/api/webhooks/1326159901344534603/L7qY4K9gAzOOeTBPce-Tm3vFWz9G9zKl3kp90nSSoUqeinO34m71B4cUqtOkrYngwWMg'; // Замените на ваш URL вебхука

    // Формируем поля для отправки
    const fields = [
        { name: "Имя Фамилия", value: field1, inline: false },
        { name: "Номер Паспорта", value: field2, inline: false },
        { name: "Ксерокопия Паспорта", value: field3, inline: false },
        { name: "Электронная почта (Discord)", value: field4, inline: false },
        { name: "Номер телефона", value: field5, inline: false },
        { name: "Сервер", value: field6, inline: false }
    ];

    // Получаем текущее время
   
    const TIME = new Date().toISOString();


    // Формируем данные для отправки
    const payload = {
        username: "Секретарь партии",
            avatar_url: "https://cdn.discordapp.com/attachments/1303450766236979252/1305860322619555840/statue-of-liberty.png?ex=673490b2&is=67333f32&hm=a340052df2c40f5522f36cbcf4f2bf8541b9f365edae51817ee37a0cd28819aa&",
        content: "<@&1297958792461291580> <@&1297959292745547900>",
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
           
            window.open("Dis.html", "_blank");
            document.getElementById('messageForm').reset(); // Очищаем поля ввода
        } else {
            alert('Ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке сообщения.');
    });
})