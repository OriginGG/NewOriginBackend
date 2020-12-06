/* Replace with your SQL commands */
CREATE DATABASE esports;

CREATE TABLE account (
    account_id integer,
    first_name varchar(40),
    last_name varchar(40),
    phone varchar(40),
    email varchar(40),

);

CREATE TABLE projects (
    pid integer, 
    name varchar(40),
    type varchar(40),
);