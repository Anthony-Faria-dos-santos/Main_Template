-- SQLBook: Code
-- Deploy gyozaFleuriste:gyozaFleuriste to pg

BEGIN;

CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL, 
    "email" text NOT NULL UNIQUE,
    "created-at"  timestamptz NOT NULL DEFAULT now(),
    "updated-at" timestamptz 
);

CREATE TABLE "flower" (
     "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "name" text NOT NULL,
     "price" int NOT NULL UNIQUE,
     "created-at"  timestamptz NOT NULL DEFAULT now(),
     "updated-at" timestamptz 
);

COMMIT;
