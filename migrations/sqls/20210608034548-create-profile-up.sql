/* Replace with your SQL commands */

create function graphile.create_profile(data jsonb) returns void as $$
    insert into graphile.profile (data) values (data);
$$ language sql volatile; 