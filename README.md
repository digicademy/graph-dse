# Graphbased Digital Scholarly Edition

The graphbased digital scholarly edition in this repository encompasses both a client application built with Angular and a server infrastructure utilizing GraphQL. Rooted in the principles of data-oriented programming, this repository showcases the usage of graph databases, specifically Neo4j, through the utilization of Cypher Queries within Data Access Objects (DAOs).

The client application, developed using Angular, offers a user-friendly interface for interacting with the scholarly edition. Users can navigate through the digital resources, perform advanced searches, and visualize intricate relationships between various elements within the spectrum of GraphQL queries.

The server implements a data-oriented programming style, focusing on optimizing data handling and manipulation for enhanced performance and scalability. It was built using Express in Node.Js. The GraphQL library used is not oppinonated and was built from scratch. In this respect, every developer is free to decide how the individual resolvers are used.

If there are any questions or problems, feel free to [contact me](https://www.sebenns.com) at any time. Either via [Github](https://github.com/sebenns), my deposited email or via the social networks that have been linked in my profile.

# Express - server application

The server, written in TypeScript and powered by ExpressJS, provides a GraphQL endpoint. The GraphQL endpoint primarily handles query interfaces, as there have been no requirements for mutations in the current projects involving generic applications. Additionally, Neo4j drivers are utilized to establish connections with a Neo4j graph database and execute Cypher queries found in the Data Access Objects.

## Project structure

```
| server
| - src
| | - database (Data Access Objects)
| | - graphql (GraphQL queries & type definitions)
| | - models (TypeScript interfaces)
| | ...
```

The server's project structure includes Data Access Objects (DAOs) that solely act as an interface between GraphQL and the database. The GraphQL Type and Query Definitions reside in a separate folder and are later exported and merged into a `_schema.ts` file. Additionally, the models consist of straightforward TypeScript interfaces, ensuring type safety throughout the application.

## Environment variables

You have flexibility in how you handle environment variables. One option is to store them in files such as `.env` for development or `.prod.env` for production. Alternatively, you can pass them directly by the system. It is generally recommended to provide sensitive variables in the environment rather than keeping them in a file for security reasons. The choice ultimately depends on your specific requirements and preferences.

## Initial setup & startup

Assuming common requirements for the use of Node.js, the remaining steps follow the standard procedure for setting up a Node project with NPM.

1. Join the root directory for the server application.
2. Install all packages along the package-lock.json with `npm ci`.
3. Make sure to have set enviornment variables.
4. Run `npm start -- <--prod>` or `npm run develop`.
5. Open the GraphiQL editor to run and test GraphQL queries.

You can disable the GraphiQL editor within the environment variables.

# Angular - client application

The Angular version of the project is designed to be as generic as possible, but it is still tailored specifically to The Socinian Correspondence project. You can find a currently deployed version of the project at [https://sozinianer.de](https://sozinianer.de), where you can explore its functionality. This repository serves as an example of a client application that utilizes a server with a data-oriented approach and employing GraphQL and Neo4j interfaces. With minor adjustments, it is feasible to adapt the same project for other purposes. The project is well-documented, allowing for the use of alternative frontends or the integration of additional applications. In future updates, a more generic application will be made available, accompanied by comprehensive documentation on its usage. Until then, please feel free to experiment with the Angular application and don't hesitate to reach out if you have any questions.
