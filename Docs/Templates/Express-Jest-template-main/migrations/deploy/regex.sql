-- SQLBook: Code
BEGIN;

ALTER TABLE "user"
  ADD CONSTRAINT "email_constraint" CHECK ("email" ~ '[\w\W+]+@[a-z0-9.-]+\.[a-z]{2,3}$');

COMMIT: