# Use hasura image with integrated migration 
FROM hasura/graphql-engine:v1.3.3.cli-migrations-v2


# copy migration files to container
COPY ./migrations /hasura-migrations

# copy metadata files to container
COPY ./metadata /hasura-metadata