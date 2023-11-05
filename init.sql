-- Create database for app

DROP DATABASE IF EXISTS emreport;

CREATE DATABASE emreport
    WITH
    OWNER = root
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


\c emreport;

 -- Create Case Data Table
CREATE TABLE IF NOT EXISTS public.cases
(
    id SERIAL PRIMARY KEY,
    birthdate date,
    age smallint DEFAULT '-1'::integer,
    gender smallint,
    hospital smallint DEFAULT 0,
    first character varying(20) COLLATE pg_catalog."default",
    last character varying(20) COLLATE pg_catalog."default",
    type character varying(100) COLLATE pg_catalog."default",
    cc character varying(100) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;
