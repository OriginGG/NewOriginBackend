/* Replace with your SQL commands */

create schema graphile;

create role graphile;

create role graphile_anonymous;

grant graphile_anonymous to graphile;

create type graphile.jwt_token as (role text);