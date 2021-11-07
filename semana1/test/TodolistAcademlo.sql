CREATE TABLE "tasks" (
  "id" integer PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" text,
  "due_date" timestamp NOT NULL,
  "user_id" integer,
  "category_id" integer,
  "status_id" integer,
  "completed" boolean DEFAULT false,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "update_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "active" boolean DEFAULT false,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "update_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "status" (
  "id" integer PRIMARY KEY,
  "name" varchar NOT NULL,
  "color" char(10) NOT NULL,
  "created_by" integer NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "update_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "created_by" integer NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "update_at" timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("status_id") REFERENCES "status" ("id");

ALTER TABLE "status" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "categories" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");
