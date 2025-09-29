// Получаем объект WebApp
const tg = window.Telegram.WebApp;

// --- 1. Говорим Telegram, что приложение готово ---
tg.ready();

// --- 2. Получаем данные пользователя ---
const userInfo = tg.initDataUnsafe.user;
if (userInfo) {
    document.getElementById('user-info').innerText = `Привет, ${userInfo.first_name}! Твой ID: ${userInfo.id}.`;
} else {
    document.getElementById('user-info').innerText = 'Не удалось получить данные пользователя.';
}

// --- 3. Управляем главной кнопкой Telegram ---
// Эта кнопка появляется внизу экрана
tg.MainButton.setText("Отправить данные");
tg.MainButton.show();

// Вешаем обработчик на клик по главной кнопке
tg.MainButton.onClick(() => {
    const dataToSend = {
        status: "success",
        userId: userInfo ? userInfo.id : null
    };
    
    // Отправляем данные боту (если нужно)
    tg.sendData(JSON.stringify(dataToSend));
    
    // Закрываем приложение
    tg.close();
});

// Пример: обработчик клика на обычную HTML-кнопку
document.getElementById('main-button').addEventListener('click', () => {
    alert('Это обычная HTML-кнопка!');
});