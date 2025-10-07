const tg = window.Telegram.WebApp;

tg.ready();
const userInfo = tg.initDataUnsafe.user;
if (userInfo) {
    document.getElementById('user-info').innerText = `Привет, ${userInfo.first_name}! Твой ID: ${userInfo.id}.`;
} else {
    document.getElementById('user-info').innerText = 'Не удалось получить данные пользователя.';
}
