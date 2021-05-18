#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER djangouser;
    CREATE DATABASE djangodb;
    GRANT ALL PRIVILEGES ON DATABASE djangodb TO djangouser;
EOSQL
