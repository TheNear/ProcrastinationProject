# Отступление
При разработке проекта, старался использовать как можно меньше сторонних библиотек, так-как проект для самообучения.
На самом деле, львиную долю времени отнимает проработка дизайна. Где какая кнопка должна располагаться, что-бы пользователь не испытывал дискомфорта при взаимодействии с сайтом, и прочее.

# ProcrastinationProject
Домашний проект. Проект изначально задумывался как сайт\приложение для борьбы с прокрастинацией. Люди регистрируются, выполняют доступные задания в реальной жизни, такие как: Позаниматься английским языком, позаниматься спортом, почитать полезную литературу, порисовать, поиграть на музыкальных инструментах. За выполнения определенных заданий, люди получают определенное количество баллов. Так-же планируется возможность зарабатывать очивки за определенные достижения. Очки можно будет тратить на какие-то бонусы и визуальные вещи, которые будут отображаться для других пользователей. Другие пользователи могут видеть статистику по очкам и выполнениям заданий других участников. Будет доступна таблица рейтинга, где будут показаны самые продуктивные пользователи. Выполнение заданий будут отправлятся на проверку для других пользователей, скорее всего с фото-отчетом или любым другим доказательством о выполнении задания, только после проверки пользователь получает баллы. Такая система пока единственное решение против обычного накручивания очков.

# Статус
### Complete Status: <10%
:heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart:


Проект автоматически заливается на хостинг firebase. Можно проверить состояние приложения на домене https://www.dobest.live

# Проблемы которые нужно решить
- :white_check_mark:~~Нет анимации при закрытии меню пользователя.~~
  - :heavy_exclamation_mark: Добавлен HOC withAnimation, который занимается тем, что вначале удалает класс active, а потом демонтирует элемент со страницы.
- :white_check_mark:~~Браузер ругается на то, что сайт не безопасный при вводе логина и пароля.~~
  - :heavy_exclamation_mark:Ругался из-за input type="text"(?? Не точно) и из-за отсутствия Autocomplete.
- :white_check_mark:~~Проблема с всплывающим окном настройки при клике вне элемента. Окно убирается при клике на дочерние элементы. Код пока закомментирован в SidePanel.~~
  - :heavy_exclamation_mark:Была неправильная проверка наличие элемента внутри окна. Так-же внутри был элемент TextInput, который при клики на него трансформировался из < p > в < input > и в итоге при нажатии на него, данного элемента уже не было в DOM и он не проходил проверку, закрывая окно.
- :white_check_mark:~~Проблема с TextInput, нужено что-бы когда форма в фокусе, кнопка ESC приводила к отмене ввода, но не к закрытию окна. Как оказалась, что работа со stopPropagation() в реакт, это не простая задача.~~
  - :heavy_exclamation_mark: Возможность смены имени перенесена просто в боковой меню профиля.
- Так как в мобильной версии, боковое меню становится бургером, меню остается за кадром и его можно прожать кнопкой TAB.
- Было-бы неплохо убрать вообще возможность открытия SideMenu и ProfileMenu одновременно. Сейчас это возможно, если открывать с помощью фокусирования и ENTER.
- Нужно как-то оптимизировать компоненты SignIn и SignUp, много повторного кода.
- Заняться оптимизацией рендера
- Очень много ресурсов занимает рендер SVG иконок FontAwesome, решить проблему с ними.


# Нужно сделать
- :white_check_mark:~~Кнопку выхода из аккаунта~~
- :white_check_mark:~~Нужно сделать всплывающие модальное окно, предположительно через Portal~~
  - ### Проблемы
  - ~~Нужно сделать возможность появление нескольких модальных окон, они должны плавно появлятся внизу справа экрана и через определенное время пропадать. При появлении второго модального окна, первое окно подвигается вверх.~~
  - ~~Проблема в том, что модальное окно должно появляться после обновление массива с этими событиями в сторе. Какая-то функция может просто диспатчить сообщение об ошибке, и должно появлятся модальное окно.~~
- :white_check_mark:~~После этого нужно сверстать окно логина~~
- :white_check_mark:~~Добавить LazyLoad~~
- :white_check_mark:~~Настроить Routerы~~
- :white_check_mark:~~Привзать Firebase авторизацию~~
- :white_check_mark:~~Возможность изменить имя профиля.~~
- :white_check_mark:~~Добавить регистрацию, выключить её на время разработки.~~
  - :white_check_mark: ~~Изначально для профиля пользователя было создано отдельное место в store. Но оказывается если в firestore создать коллекцию users с id'шниками пользователей. firestore привязанный к редаксу, сам найдет эти профили и сам их привяжет к конкретному пользователю. Весь код пока закомментирован, потому-что оказался не нужен.~~
- Добавить валидацию формам.
- Добавить задачи, такие как "Занятие спортом" и прочее.
