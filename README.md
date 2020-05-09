# ProcrastinationProject
Домашний проект. Проект изначально задумывался как сайт\приложение для борьбы с прокрастинацией. Люди регистрируются, выполняют доступные задания в реальной жизни, такие как: Позаниматься английским языком, позаниматься спортом, почитать полезную литературу, порисовать, поиграть на музыкальных инструментах. За выполнения определенных заданий, люди получают определенное количество баллов. Так-же планируется возможность зарабатывать очивки за определенные достижения. Очки можно будет тратить на какие-то бонусы и визуальные вещи, которые будут отображаться для других пользователей. Другие пользователи могут видеть статистику по очкам и выполнениям заданий других участников. Будет доступна таблица рейтинга, где будут показаны самые продуктивные пользователи. Выполнение заданий будут отправлятся на проверку для других пользователей, скорее всего с фото-отчетом или любым другим доказательством о выполнении задания, только после проверки пользователь получает баллы. Такая система пока единственное решение против обычного накручивания очков.

# Статус
### Complete Status: <5%
:heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:


Проект автоматически заливается на хостинг firebase. Можно проверить состояние приложения на домене https://www.dobest.live

# Проблемы которые нужно решить
- ~~Нет анимации при закрытии меню пользователя.~~
- Так как в мобильной версии, боковое меню становится бургером, меню остается за кадром и его можно прожать кнопкой TAB.
- Было-бы неплохо убрать вообще возможность открытия SideMenu и ProfileMenu одновременно.
  - Сейчас это возможно, если открывать с помощью фокусирования и ENTER.

# Нужно сделать
- ~~Кнопку выхода из аккаунта~~
- Нужно сделать всплывающие модальное окно, предположительно через Portal
  - ### Проблемы
  - Нужно сделать возможность появление нескольких модальных окон, они должны плавно появлятся внизу справа экрана и через определенное время пропадать. При появлении второго модального окна, первое окно подвигается вверх.
  - Проблема в том, что модальное окно должно появляться после обновление массива с этими событиями в сторе. Какая-то функция может просто диспатчить сообщение об ошибке, и должно появлятся модальное окно.
- После этого нужно сверстать окно логина
- Настроить Routerы
- Привзать Firebase авторизацию
