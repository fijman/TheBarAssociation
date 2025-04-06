document.getElementById('But1').addEventListener('click', function () {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');

    element1.classList.remove('visible');
    element1.classList.add('hidden');
    element2.classList.remove('hidden');
    element2.classList.add('visible');
});

document.getElementById('But2').addEventListener('click', function () {
    const element1 = document.getElementById('element2');
    const element2 = document.getElementById('element3');

    element1.classList.remove('visible');
    element1.classList.add('hidden');
    element2.classList.remove('hidden');
    element2.classList.add('visible');
});

document.getElementById('But3').addEventListener('click', function () {
    const element1 = document.getElementById('element3');
    const element2 = document.getElementById('element4');

    element1.classList.remove('visible');
    element1.classList.add('hidden');
    element2.classList.remove('hidden');
    element2.classList.add('visible');
});

document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = document.querySelector('#messageForm button[type="submit"]');
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#888";
    submitButton.textContent = "Отправка...";

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

    const webhookURL = 'https://discord.com/api/webhooks/1330635021458997310/EcbATN8IkNrW75xArNbhoo09eG39n9Q4M7Kh8FrzsFoHleyg3AmuXwhts5SVNnqJFkMB';

    const formatField = (value) => `> \`${value.trim() === "" ? "-" : value.trim()}\``;

    const fields = [
        { name: "Имя Фамилия (Истец)", value: formatField(field1) },
        { name: "Номер Паспорта (Истец)", value: formatField(field2) },
        { name: "Ксерокопия Паспорта (Истец)", value: formatField(field3) },
        { name: "Электронная почта (Истец)", value: formatField(field4) },
        { name: "Номер телефона (Истец)", value: formatField(field5) },
        { name: "Имя Фамилия (Ответчик)", value: formatField(field6) },
        { name: "Номер Паспорта (Ответчик)", value: formatField(field7) },
        { name: "Организация (Ответчик)", value: formatField(field8) },
        { name: "Инкриминированые статьи", value: formatField(field9) },
        { name: "Видеофиксациия", value: formatField(field10) },
        { name: "Была ли сделана запись о судимости?", value: formatField(field11) },
        { name: "Краткое описание ситуации", value: formatField(field12) },
        { name: "Скриншот оплаты услуг", value: formatField(field13) }
    ];
    
    
    

    const TIME = new Date().toISOString();

    const payload = {
        username: "Секретарь партии",
        avatar_url: "https://cdn.discordapp.com/attachments/1302639052008456258/1330636354131988501/statue-of-liberty.png",
        content: "<@&1321467897834639411>",
        embeds: [{
            title: "Исковое заявление",
            color: 0x00FF00,
            fields: fields,
            timestamp: TIME,
            footer: {
                text: "by Walter Heisenberg"
            },
            thumbnail: {
                url: "https://cdn.discordapp.com/attachments/1303450766236979252/1303454138801324134/undefined_-_Imgur_5.png"
            },
            image: {
                url: "https://cdn.discordapp.com/attachments/1301258252427989133/1301266881419804762/55f758f4c4b08c0e.png"
            }
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
    })
    .finally(() => {
        // Разблокировать кнопку после завершения запроса
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "";
        submitButton.textContent = "Отправить";
    });
});
