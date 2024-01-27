-- SQLBook: Code
-- Revert gyozaFleuriste:regex from pg

BEGIN;

ALTER TABLE "user"
  DROP CONSTRAINT "email_constraint";

COMMIT;
