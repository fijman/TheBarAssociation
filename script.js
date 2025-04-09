let currentAccess = [];
let currentTestType = '';
let questions = [];

document.getElementById('loginBtn').addEventListener('click', () => {
  const codeInput = document.getElementById('password').value.trim();

  fetch('code.json')
    .then(response => response.json())
    .then(data => {
      const entry = data.codes.find(c => c.code === codeInput && c.valid);
      if (entry) {
        currentAccess = entry.access;

        if (!currentAccess.includes('advocate')) {
          document.getElementById('btn-advocate').style.display = 'none';
        }
        if (!currentAccess.includes('senior_advocate')) {
          document.getElementById('btn-senior').style.display = 'none';
        }
        if (!currentAccess.includes('zpka')) {
          document.getElementById('btn-zpka').style.display = 'none';
        }

        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('roleSelection').classList.remove('hidden');
      } else {
        alert('Неверный или недействительный код');
      }
    })
    .catch(error => console.error('Ошибка загрузки кода: ', error));
});

function startTest(type) {
  currentTestType = type;

  let file = `${type}.json`;
  let questionCount = type === 'advocate' ? 10 : type === 'senior_advocate' ? 15 : 20;

  fetch(file)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        // Перемешиваем и выбираем нужное количество вопросов
        questions = shuffleArray(data).slice(0, questionCount);
        renderQuestions();
        document.getElementById('roleSelection').classList.add('hidden');
        document.getElementById('examPanel').classList.remove('hidden');
      } else {
        console.error('Нет вопросов в файле', file);
      }
    })
    .catch(error => console.error('Ошибка при загрузке вопросов: ', error));
}

function renderQuestions() {
  const container = document.getElementById('questions');
  container.innerHTML = '';

  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
      <p>${index + 1}. ${q.text}</p>
      <div class="answer-group">
        <input type="radio" name="q${index}" id="q${index}v" value="Верно">
        <label for="q${index}v">Верно</label>

        <input type="radio" name="q${index}" id="q${index}n" value="Неверно">
        <label for="q${index}n">Неверно</label>
      </div>
      <div id="explanation${index}">
        <p id="pos"><strong>Пояснение:</strong> ${q.explanation}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

document.getElementById('submitBtn').addEventListener('click', () => {
  const examinee = document.getElementById('examineeName').value.trim();
  const examiner = document.getElementById('examinerName').value.trim();

  if (!examinee || !examiner) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  let totalScore = 0;
  let maxScore = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const isCorrect = selected && selected.value === 'Верно';
    if (isCorrect) totalScore += q.points;
    maxScore += q.points;

    // Показываем пояснение
    const explanationDiv = document.getElementById(`explanation${index}`);
    if (explanationDiv) {
      explanationDiv.classList.remove('hidden');
    }
  });

  const percent = Math.round((totalScore / maxScore) * 100);
  const passed = percent >= 60;

  // Сбросим старые результаты, чтобы убрать рамку (если она осталась)
  const resultElement = document.getElementById('result');
  resultElement.classList.remove('success', 'fail'); // Убираем классы 'success' и 'fail'

  // Добавляем новый класс для результата
  resultElement.classList.add(passed ? 'success' : 'fail');
  resultElement.innerText = `Результат: ${percent}% (${totalScore} из ${maxScore} баллов)`;

  // Отправляем данные в Discord
  sendToWebhook(totalScore, maxScore, percent, passed, examinee, examiner);

  // Вернуть к выбору
  setTimeout(() => {
    // Скрываем панель с результатами и показываем выбор экзамена
    document.getElementById('examPanel').classList.add('hidden');
    document.getElementById('roleSelection').classList.remove('hidden');
    
    // Очищаем результат
    resultElement.innerText = '';
    
    // Сбрасываем форму и скрываем пояснения
    document.getElementById('examForm').reset();
    
    // Убираем старые результаты
    resultElement.classList.remove('success', 'fail'); // Сброс рамки
  }, 5000);
});



function sendToWebhook(score, total, percent, passed, examineeName, examinerName) {
  const fields = [
    { 
      name: "Экзаменуемый:", 
      value: `**<@${examineeName}>**` 
    },
    { 
      name: "Экзаменатор:", 
      value: `**<@${examinerName}>**` 
    },
    { name: "Баллы:", value: "`" + `${score} из ${total}` + "`" },
    { name: "Процент:", value: "`" + `${percent.toFixed(1)}%` + "`" }
  ];
  const webhookUrl = 'https://discord.com/api/webhooks/1359542912647434391/7E_S0wfMd3d5-2CzJ-vlwGMHaCcsQ1Yxxpk06V1uw7h4rfMqkwKH-Ww_b28OSyEH7MwO';

  const payload = {
    username: "Секретарь адвокатуры",
    avatar_url: "https://cdn.discordapp.com/attachments/1302639052008456258/1330636354131988501/statue-of-liberty.png",
    content: `**<@${examineeName}>**` + `${passed ? ' прошел экзамен ✅' : ' не прошел экзамен ❌'}`,
    embeds: [
      {
        title: 'Результаты экзамена',
        fields: fields,
        color: passed ? 3857994 : 16719659,
        footer: {
          text: "Частная Коллегия Адвокатов IronSide Justice.",
          icon_url: 'https://cdn.discordapp.com/attachments/1303450766236979252/1303454138801324134/undefined_-_Imgur_5.png'
        },
        thumbnail: {
          url: 'https://media.discordapp.net/attachments/1302639052008456258/1359502002899648758/249b84c349454074.png'
        },
        image: {
          url: 'https://media.discordapp.net/attachments/1302639052008456258/1359517606947852390/a4ea191ad79b03f3.png'
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      console.log("Сообщение успешно отправлено на вебхук.");
    } else {
      console.error("Ошибка отправки на вебхук:", response.status, response.statusText);
    }
  })
  .catch(error => {
    console.error("Ошибка при отправке запроса:", error);
  });
}
