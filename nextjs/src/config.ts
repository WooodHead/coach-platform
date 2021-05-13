let baseUrl = "http://server:3000";
let hasuraUrl = "http://plant-hasura:8080/v1/graphql";

if (typeof window !== "undefined") {
  baseUrl = `${location.protocol}//${location.hostname}`;
  hasuraUrl = `${baseUrl}/hasura/v1/graphql`;

  if (location.port) {
    baseUrl = "http://localhost:8080";
    hasuraUrl = "http://localhost:8081/v1/graphql";
  }
}

export const apiUrl = `${baseUrl}/api`;

export const graphqlUrl = hasuraUrl;
