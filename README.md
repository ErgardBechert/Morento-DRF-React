### Запуск проекта
  
  Установить git (https://git-scm.com/download/win)
  Зайти в удобный редактор кода и открыть термин (ctrl + shift + ё)
  ```
  git clone https://github.com/ErgardBechert/Morento-DRF-React
   ```
- Создайте виртуальное окружение, в терминале перейдите по пути "cd/backend" и вставьте эту команду

    ```.bash
    python -m venv venv
    ```
- Активируйте venv
  - на Windows
  ```
  venv/scripts/activate
  ```
  - на Linux 
  ```
  venv/bin/activate
  ```
  - Установите нужные библиотеки
  ```.bash
  pip install -r requirements.txt
  ```

  - Запустите сервер
  ```.bash
  py manage.py runserver
  ```

#### Запуск клиента
- Скачайте https://nodejs.org/en/download
- В терминале перейдите по пути "cd/frontend" 
- Установите нужные библиотеки
  ```.bash
  npm install react-router-dom
  ```
- Запустите клиент
  ```.bash
  npm start
  ```

---
