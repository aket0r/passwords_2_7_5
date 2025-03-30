<div align="center">

# 🛡️ Passwords 2.7.5

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Electron-blue" />
  <img src="https://img.shields.io/badge/Node.js-18.x-green" />
  <img alt="Static Badge" src="https://img.shields.io/badge/Status-80%25%20complete-green">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  <img alt="Static Badge" src="https://img.shields.io/badge/SCSS-29.7%25-blue">
  <img alt="Static Badge" src="https://img.shields.io/badge/Languages-6-blue">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white" />
  <img src="https://img.shields.io/badge/Less-1D365D?style=for-the-badge&logo=less&logoColor=white" />
  <img src="https://img.shields.io/badge/bat-4D4D4D?style=for-the-badge&logo=windows&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-264de4?style=for-the-badge&logo=css3&logoColor=white" />
</p>




**Passwords 2.7.5** — это простой кроссплатформенный менеджер паролей, разработанный на базе Electron.  
Приложение позволяет безопасно хранить, искать и управлять паролями локально на вашем устройстве.

---

## 🚀 Основные возможности

</div>

- 📁 Хранение паролей в локальном JSON-файле
- 🔍 Поиск по названию или логину
- 🛠️ Быстрое добавление, редактирование и удаление записей
- 🧪 Поддержка Telegram-уведомлений (опционально)
- 🖥️ Поддержка Windows, Linux и macOS
- 💾 Простая структура данных: всё хранится в папке `Documents/passwords_data`

<div align="center">

## 🧱 Технологии

</div>

- Electron
- Node.js (fs, os, path)
- node-telegram-bot-api
- Vanilla JS + HTML/CSS

<div align="center">

## 📂 Структура проекта

</div>

```
passwords_2_7_5/
├── app/                      # Основной исходный код
├── build/                    # Скрипты сборки для Windows/Linux/macOS
├── icons/                    # Иконки для приложения
├── README.md
├── package.json
└── ...
```

<div align="center">

## ⚙️ Установка и запуск

</div>

### 1. Клонирование репозитория

```bash
git clone https://github.com/aket0r/passwords_2_7_5.git
cd passwords_2_7_5
```

### 2. Установка зависимостей

```bash
npm install
npm i safe-regex-test
npm i fs
npm i os
npm i node-telegram-bot-api
npm i electron
npm i electron-packager
npm i electron --save
```
#### Или просто запуститке файл установщик (init-modules.cmd)

### 3. Подготовка файлов и папок

Создай директорию:

```bash
C:/Users/<имя_пользователя>/Documents/passwords_data
```

И внутри неё следующие файлы (содержимое — `[]`):

- logs.json
- passwords.json
- settings.json
- user.json

> ⚠️ В будущем будет реализована автоматическая инициализация.

![image](https://github.com/user-attachments/assets/ac19a9f0-0181-4183-a890-c1e4f8578387)
<br>
<br>
![image](https://github.com/user-attachments/assets/dc060720-d89f-4b81-8856-aef32e3d42de)
<br>
После установки (build) создайте папку logs и файл log.txt:<br>
![image](https://github.com/user-attachments/assets/d3263abb-3404-4950-8a5c-a01690eae80b)
<br>
<br>
![image](https://github.com/user-attachments/assets/5f3c8ab7-81c0-4bb7-bb95-61f4e0f0f45e)

### 4. Запуск приложения в dev-режиме

```bash
npm start
```

### 5. Сборка дистрибутива

```bash
# Для Windows
npm run build-win

# Для Linux
npm run build-linux

# Для macOS
npm run build-mac
```

<div align="center">

## 📸 Скриншоты

![image](https://github.com/user-attachments/assets/2f95e891-cc99-4916-b327-0837de2a4c5c)
![image](https://github.com/user-attachments/assets/61f90a6d-8e1c-4ba8-b4ff-bd84907703ef)
![image](https://github.com/user-attachments/assets/ee47b54e-a339-4a20-8bfd-c2c23e49d3d7)
![image](https://github.com/user-attachments/assets/5b0993b4-c36e-4da4-bce2-3faaaab354ef)
![image](https://github.com/user-attachments/assets/5fc81f15-bfd2-4818-b91c-d54c6a32bfef)
</div>
<div align="center">

## 📜 Лицензия

</div>

MIT License

