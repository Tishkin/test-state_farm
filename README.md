Установка:
========
Скачать:
________
> * [Android studio](http://webdesign.ru.net)
> * [Appium](https://github.com/appium/appium-desktop/releases/download/v1.17.1-1/Appium-windows-1.17.1-1.exe)
> * [jdk-8 x64](https://mega.nz/#!lgdHSAJB!YCLwj5De1pq7auhfCYNxfHQppqFRnz13JjKxPHln2pQ)
> * [State Farm® 8.7.0 APKs ](https://apkplz.net/download-app/com.statefarm.pocketagent)
> * [Split APKs Installer](https://apkplz.net/app/com.aefyr.sai)

Установка Android studio:
________
> * [Подробнее по установке можно почитать тут](https://lumpics.ru/install-android-studio-on-computer/)


Установка AVD Manager Android studio:
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
    
![Download](https://i.ibb.co/tZx7xH2/2020-07-20-16-03-36.png)

Эмулятор будет готов к использованию!

Установить jdk-8 x64:
________

    Запустить файл jdk-8u181-windows-x64.exe и установить в стандарную дерикторию.
    
Установить Appium:
________

    Запустить файл Appium-windows-1.17.1-1.exe и установить в стандарную дерикторию.
    
Установить Environment:
________

    1. Открыть "Система" выбрать поле "Дополнительные параметры системы"

![System](https://i.ibb.co/NWmCKkg/2020-07-20-16-40-28.png)


    2. В открывшемся окне выбрать вкладку "Дополнительно" -> "Параметры среды" 

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
    

