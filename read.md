1. Устанавливаем GIT
2.
3. npm init Создание .JSON-файлf в каталог проекта
4. git init Запускаем git
5. git config --local user.name "Martin937" Объявляем свое имя
6. git config --local user.email "Martin937@yandex.ru" Объявляем свой имейл
7. git config --local core.autocrlf true Параметры установки окончаний строк
8. git config --local core.safecrlf warn Параметры установки окончаний строк
9. git config --local core.quotepath off Установка отображения unicode
10. git status Посмотреть состояние
11. git add -A Добавить все файлы
12. git commit -a -m”start of the project” Создание контрольной точки
13. git add -A + git commit -a -m”message” Вводить после внесения всех изменений
14. git log Посмотреть изменения
15.
16.
17. Создаём репозиторий на GITHUB и связываем его с проектом
18.
19. git remote add origin https://github.com/Martin937/pult.ru.git Прописываем путь к github
20. git remote set-url origin https://github.com/Martin937/pult.ru.git Если нужно изменить уже существующий
21. git push -u origin master Заливка на github
22. git pull Обновление всех связей и изменений
23. git push Заливка на github
24.
25.
26. Устанавливаем и запускаем GULP
27.
28. node --version Проверяем установку nodejs
29. npm --version Проверяем установку npm
30. npx --version Проверяем установку npx
31. Сначала устанавливаем всё глобально -g, а затем с --save-dev

npm install --save-dev gulp-htmlmin gulp-rename gulp-sass gulp-imagemin browser-sync gulp-clean-css gulp-autoprefixer gulp-cli gulp

32. (верстка) npm install gulp-cli --save-dev Установите утилиту командной строки gulp
33. npm init Создание пакета .JSON-файл в каталог проекта
34. (верстка) npm install gulp --save-dev Установите пакет gulp
35. gulp --version Проверяем установку gulp
36. (верстка) npm i gulp-autoprefixer --save-dev -автоматически добавляет вендорные префиксы к CSS свойствам
37. (верстка) npm i gulp-clean-css --save-dev — нужен для сжатия CSS кода
38. (верстка) npm i browser-sync --save-dev -локальный dev сервер
39. (верстка) npm i gulp-imagemin --save-dev -для сжатия картинок
40. (верстка) npm i gulp-sass --save-dev -для компиляции нашего SCSS кода
41. (верстка) npm i gulp-rename --save-dev Устанавливаем пакеты npm
42. (верстка) npm i gulp-htmlmin --save-dev Сжатие html
43. npm i gulp-uglify --save-dev -будет сжимать наш JS
44. npm i gulp-rigger --save-dev -это просто киллер фича. Плагин позволяет импортировать один файл в другой простой конструкцией //= footer.html
45. npm i gulp-watch --save-dev -для наблюдения за изменениями файлов
46. npm i rimraf --save-dev -rm -rf для ноды
47. npm i gulp-sourcemaps --save-dev -для генерации css sourscemaps, которые будут помогать нам при отладке кода
48. npm i imagemin-pngquant --save-dev -дополнения к предыдущему плагину, для работы с PNG
49. добавить в packadge.json
    "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
    ]
50. npm i Если используем скопированные файлы
51. gulp Запускаем gulp
52. Ctrl+c Остановить gulp
53. Для сброса кэша сервера нажать SHIFT+F5
54.
55.
56.
57. рекомендуется также заменить значения версий на latest, чтобы всегда устанавливать актуальные версии плагинов в проект.

Популярные названия классов HTML/CSS
Блоки
page — корневой элемент страницы

header — шапка (страницы или элемента)

footer — подвал (страницы или элемента)

section — раздел контента (один из нескольких)

body — основная часть (страницы или элемента)

content — содержимое элемента

sidebar — боковая колонка (страницы или элемента)

aside — блок с дополнительной информацией

widget — виджет, например, в боковой колонке

Раскладка
wrapper, wrap — обёртка, обычно внешняя

inner — внутренняя обёртка

container, holder, box — контейнер

grid — раскладка (страницы или элемента) в виде сетки (обычно содержит в себе row и col)

row — контейнер в виде строки

col, column — контейнер в виде столбца

Элементы управления
button, btn — кнопка, например, для отправки формы

control — элемент управления, например, стрелки «Вперёд/назад» в фотогалерее, кнопки управления слайдером

dropdown — выпадающий список

Текст
title, subject, heading, headline, caption заголовок

subtitle подзаголовок

slogan слоган

lead, tagline лид-абзац в тексте

text текстовый контент

desc описание, вариант текстового контента

excerpt отрывок текста, обычно используется перед ссылкой «Читать далее…»

link ссылка

copyright, copy копирайт

Списки
list, items — список

item — элемент списка

Изображения
image, img, picture, pic — картинка

icon — иконка

logo — логотип

userpic, avatar — юзерпик, маленькая картинка пользователя

thumbnail, thumb — миниатюра, уменьшенное изображение

Медиавыражения
phone, mobile — мобильные устройства

phablet — телефоны с большим экраном (6-7″)

tablet — планшеты

notebook, laptop — ноутбуки

desktop — настольные компьютеры

Размеры
tiny — маленький, крохотный

small — небольшой

medium — средний

big, large — большой

huge — огромный

narrow — узкий

wide — широкий

Состояния
active, current — активный элемент, например, текущий пункт меню

hidden — скрытый элемент

error — статус ошибки

warning — статус предупреждения

success — статус успешного выполнения задачи

pending — состояние ожидания, например, перед сменой статуса на error или success

Дополнительно
search — поиск

socials — блок иконок соцсетей

advertisement, adv, commercial, promo — рекламный блок (режутся Адблоком, не рекомендуется использовать такие классы для блоков с внутренней рекламой)

features, benefits — список основных особенностей товара, услуги

slider, carousel — слайдер, интерактивный элемент с прокруткой содержимого

pagination — постраничная навигация

user, author — пользователь, автор записи или комментария

meta — блок с дополнительной информацией, например, блок тегов и даты в посте

cart, basket — корзина

breadcrumbs — навигационная цепочка, «хлебные крошки»

more, all — ссылка на полную информацию

modal — модальное (диалоговое) окно

popup — всплывающее окно

tooltip, tip — всплывающие подсказки

preview — анонс, отрывок, например новости или поста, может состоять из заголовка, описания и картинки. Предполагается ссылка на полную версию
https://github.com/Martin937/pult.ru.git
