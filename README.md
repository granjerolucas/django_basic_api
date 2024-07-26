```shell
python -m venv env
source env/bin/activate  # En Windows usa: env\Scripts\activate
.venv/Scripts/Activate.ps1

pip install -r requirements.txt

# django-admin startproject drf
# cd drf

django-admin startproject drf .

python manage.py startapp api
py manage.py startapp api

```


# conectors

https://mariadb.com/downloads/connectors/

If binary wheels do not exist for your version of Python, it may be possible to build from source, but if this does not work, do not come asking for support. To build from source, download the MariaDB C Connector and install it. It must be installed in the default location (usually "C:\Program Files\MariaDB\MariaDB Connector C" or "C:\Program Files (x86)\MariaDB\MariaDB Connector C" for 32-bit). If you build the connector yourself or install it in a different location, set the environment variable MYSQLCLIENT_CONNECTOR before installing. Once you have the connector installed and an appropriate version of Visual Studio for your version of Python:

```
set MYSQLCLIENT_CONNECTOR=C:\laragon\bin\mysql\mysql-8.0.30-winx64
set MYSQLCLIENT_CONNECTOR="C:\Program Files\MariaDB\MariaDB Connector C 64-bit"
pip install mysqlclient
```