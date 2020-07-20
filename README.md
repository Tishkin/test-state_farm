Установка:
========
Скачать:
________
> * [Android studio](http://webdesign.ru.net)
> * [Appium](https://github.com/appium/appium-desktop/releases/download/v1.17.1-1/Appium-windows-1.17.1-1.exe)
> * [jdk-8 x64](https://mega.nz/#!lgdHSAJB!YCLwj5De1pq7auhfCYNxfHQppqFRnz13JjKxPHln2pQ)
> * [State Farm® 8.7.0 APKs ](https://apkplz.net/download-app/com.statefarm.pocketagent)
> * [Split APKs Installer](https://apkplz.net/app/com.aefyr.sai)
> * [Node.js](https://nodejs.org/dist/v12.18.2/node-v12.18.2-x64.msi)

**Установка Node.js:**
________

> * [Подробнее по установке Node.js](https://zen.yandex.ru/media/id/5a16a1eee86a9e56a71cf8ef/kak-ustanovit-nodejs-i-npm-v-windows-5dc2915034808200b20fb55a?utm_source=serp)


**Установка Android studio:**
________
> * [Подробнее по установке Android studio](https://lumpics.ru/install-android-studio-on-computer/)


**Установка AVD Manager Android studio:**
________
    1. После установки Android studio в появившемся окне выбрать "Configure -> AVD Manager"

![Configure](https://i.ibb.co/0Z7j1w9/2020-07-20-15-58-56.png)
![AVD Manager](https://i.ibb.co/nBRn3cY/2020-07-20-16-00-18.png)

    2. Далее выбрать "Create Virtual Device..."

![Create Virtual Device](https://i.ibb.co/HNZJQ7Y/2020-07-20-16-02-05.png)

    3. Далее выбрать "Pixel 3" и нажать "Next"
    
![Pixel 3](https://i.ibb.co/sWLtVP2/2020-07-20-16-02-26.png)

    4. В верхнем поле "Release Name" нажать на "Download"
    
![Download](https://i.ibb.co/RSRSKt3/2020-07-20-16-02-45.png)

    5. Дождаться загрузки
    
![Download](https://i.ibb.co/NCV67Pp/2020-07-20-16-03-09.png)

    6. Указать имя в поле "AVD Name" "Pixel 3" нажать "Finish"
    
![ReName](https://i.ibb.co/tZx7xH2/2020-07-20-16-03-36.png)

Эмулятор будет готов к использованию!

**Установить jdk-8 x64:**
________

    Запустить файл jdk-8u181-windows-x64.exe и установить в стандарную дерикторию.
    
**Установить Appium:**
________

    Запустить файл Appium-windows-1.17.1-1.exe и установить в стандарную дерикторию.
    
**Установить Environment:**
________

    1. Открыть "Система" выбрать поле "Дополнительные параметры системы"

![System](https://i.ibb.co/NWmCKkg/2020-07-20-16-40-28.png)


    2. В открывшемся окне выбрать вкладку "Дополнительно" -> "Переменные среды" 

![System](https://i.ibb.co/wRPhNr8/image.png)

    3. В открывшемся окне есть 2 основных поля.  
       В верхнем поле вам необходимо добавить  две переменные: "ANDROID_AVD_HOME" и "ANDROID_HOME"
       
       ВАЖНО!!!
       Заменить "Pc" в адресе, на название своего ПК!
       Это необходимо сделать во всех дальнейших пунктах!

![System](https://i.ibb.co/fvYsdgG/1.png)

    4. Нажать кнопку "Изменить" и ввести указанные данные. 

![System](https://i.ibb.co/hFW1kF0/2.png)

    5. Проделать тоже самое для второй переменной. 

![System](https://i.ibb.co/RDPFqZz/3.png)

    6. Для нижнего поля проделать те же самые действия, что указаны на следующих фото 
    Не забывая указывать свой адрес.

![System](https://i.ibb.co/0cZQX7S/4.png)
![System](https://i.ibb.co/K9DGg3J/5.png)

    7. Выбрать переменную "Path" нажать "Изменить" 

![System](https://i.ibb.co/tB3QHQQ/6.png)

    8. Нажать кнопку "Создать" и ввести по очереди 3 последних адреса.
    Последний адрес ввести без изменений. Как показано на фото. 

![System](https://i.ibb.co/K5wbHrr/7.png)

    9. Далее принять измнеения "OK"
    
**Установка приложения на Эмулятор:**
________

    1. Скачав Split APKs Installer по ссылке выше, необходимо переименовать файл в "sai.apk"
       Далее необходимо переместить файл в корень диска D:\ 
       (или в корень любого диска но в дальнейшем использовать его.)
       Путь к файлу должен быть "D:\sai.apk"
       
    2. Запустите эулятор (зеленый треугольник)
    
![Android studio](https://i.ibb.co/qd0fHkw/8.png)

    3. После запуска эмулятора откройте коммандную строку (win + r) или "Поиск" -> cmd
       В открывшемся окне введите комманду: "adb install D:\sai.apk" 
       Начнется процесс установки приложения у вас должно получиться как на изображении ниже
       
![CMD](https://i.ibb.co/DfjksBW/2020-07-20-17-37-19.png)

    4. Далее необходимо переименовать скачaнную по ссылке State Farm® 8.7.0 APKs папку в statefarm. 
       И так же поместить ее в корень диска D:\
       В открытом окне командной строки ввести комманду: "adb push D:\statefarm /storage/emulated/0/Download/statefarm"
       У вас должен получится такой же результат как показан ниже.
       
![CMD](https://i.ibb.co/2j8HH1f/2020-07-20-17-49-14.png)

    5. Открываем эмулятор и находим там приложение "SAI" (Синяя стрелка вниз)

![Emulator](https://i.ibb.co/Fq62SD0/2020-07-20-17-51-30.png)

    6. Открываем приложение "SAI" (Синяя стрелка вниз). Нажимаем "Install APKs"

![Emulator](https://i.ibb.co/XtKTPXj/2020-07-20-17-52-00.png)

    7. Находим и нажимаем на папку "Download"

![Emulator](https://i.ibb.co/MN83Ckw/2020-07-20-17-52-48.png)

    8. Если все сделали правильно в ней должна находиться папка "statefarm", открываем ее.

![Emulator](https://i.ibb.co/X3kyWCk/2020-07-20-17-53-01.png)

    9. Выбираем все файлы как показано на изображении ниже и нажимакм "Select" 

![Emulator](https://i.ibb.co/r5SHZ2b/2020-07-20-17-53-55.png)

    10. В появившемся предупреждении выбираем "Settings" 

![Emulator](https://i.ibb.co/q5CDtrg/2020-07-20-17-54-12.png)

    11. Устанавливаем переключатель как показанно на изображении ниже
        Далее выходим (стрелка влево)

![Emulator](https://i.ibb.co/RDWCyG0/2020-07-20-17-54-27.png)

    12. В появившемся предупреждении нажимаем "Install"

![Emulator](https://i.ibb.co/cL4HLm5/2020-07-20-17-54-37.png)

    13. Через некоторое время появится логотип приложения State Farm

![Emulator](https://i.ibb.co/Z6N2VYz/2020-07-20-17-55-17.png)

**Запуск теста:**
________

    1. Необходимо что бы был включен эмулятор.
    2. Необходимо запустить Appium.
       В открывшемся окне нажать "Start Server ..."

![Appium](https://i.ibb.co/4WTTvP9/2020-07-20-18-14-43.png)

    Должен запуститься сервер
    
![Appium](https://i.ibb.co/Rhsy0KQ/2020-07-20-18-15-05.png)

    3. В папке со скачанным проектом с github открыть командную строку
       В командной строке должен быть указан адрес папки с прокетом.
    
![CMD](https://i.ibb.co/8bYt831/2020-07-20-18-19-44.png)
 
     4. Вводим комманду: "npm install". Нажмите кнопку "Enter" и начнется процесс установки.
        Результат установки может немного отличаться от изображений ниже.
     
![CMD](https://i.ibb.co/PmVPqND/2020-07-20-18-20-33.png)     
![CMD](https://i.ibb.co/jRVpgbG/2020-07-20-18-20-50.png)

    5. После установки вводим комманду: "node test.js" Нажмите кнопку "Enter"
       Далее запустится тест. Процесс наблюдайте в Эмуляторе.
       
![CMD](https://i.ibb.co/QfwR2LR/2020-07-20-18-34-39.png)     
![CMD](https://i.ibb.co/DktF7wc/2020-07-20-18-35-18.png)
![CMD](https://i.ibb.co/nrb2Zs6/2020-07-20-18-35-43.png)

    6. Тест пройден!
    
***ВАЖНО!!! Тест, возможно, придется запустить несколько раз для успешного прохождения.***