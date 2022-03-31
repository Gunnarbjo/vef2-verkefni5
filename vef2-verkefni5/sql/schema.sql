CREATE TABLE public.users (
  id SERIAL PRIMARY KEY,
  name CHARACTER VARYING(64) NOT NULL,
  username CHARACTER VARYING(64) UNIQUE NOT NULL,
  password CHARACTER VARYING(256) NOT NULL,
  admin BOOLEAN DEFAULT false,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp
);

CREATE TABLE public.events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  slug VARCHAR(64) NOT NULL,
  description TEXT,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  creatorId INTEGER NOT NULL,
  CONSTRAINT fk_creatorId FOREIGN KEY (creatorId) REFERENCES users (id)
);

CREATE TABLE public.registrations (
  id SERIAL PRIMARY KEY,
  comment TEXT,
  event INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_event FOREIGN KEY (event) REFERENCES events (id),
  CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES users (id)
);