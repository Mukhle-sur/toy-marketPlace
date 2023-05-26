import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="w-3/4 mx-auto bg-cyan-500 p-20 rounded-xl my-12">
      <h2 className="text-center text-4xl font-semibold mb-8">
        Blog Area Question And Answer :
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl">Access Token: </span> An access
            token is a credential that is issued to a client (such as a web or
            mobile application) after successfully authenticating with a server.
            It is a short-lived token that grants the client permission to
            access protected resources on the server on behalf of the
            authenticated user. The access token contains information such as
            the user's identity and permissions.
          </p>
          <p className="text-lg font-medium my-3">
            <span className="font-bold text-2xl">Refresh Token: </span>A refresh
            token is a credential that is also issued to the client during
            authentication. Unlike the access token, the refresh token is
            long-lived and used to obtain a new access token when the current
            one expires. It is securely stored by the client and exchanged with
            the server to request a fresh access token without requiring the
            user to re-authenticate.
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl">How they work together: </span>
            When a user logs in or authenticates for the first time, the server
            generates an access token and a refresh token. The access token is
            sent to the client, which includes it in subsequent requests to
            access protected resources on the server. The server validates the
            access token to authorize the requested actions.
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl">
              Storage on the client-side:{" "}
            </span>
            Access Token: The access token should be stored in a secure manner
            on the client-side. It is typically stored in memory, either in a
            variable or in a secure storage mechanism provided by the platform
            or framework being used (e.g., local storage in a web browser,
            Keychain in iOS, SharedPreferences in Android).
            <br />
            Refresh Token: The refresh token requires a more secure storage
            mechanism since it has a longer lifespan and provides the ability to
            obtain new access tokens. It is usually stored in a secure,
            encrypted storage location specific to the platform, such as the
            Keychain or the secure storage area provided by the operating
            system.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          2. Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl mb-4">SQL Databases: </span>
            <li>
              Structure: SQL databases are based on a structured and predefined
              schema, which defines the tables, columns, and relationships
              between entities. Data must adhere to this schema.
            </li>
            <li className="my-3">
              Data Integrity: SQL databases enforce strong data integrity with
              support for ACID (Atomicity, Consistency, Isolation, Durability)
              properties. Transactions ensure data consistency and integrity.
            </li>
            <li>
              Query Language: SQL databases use Structured Query Language (SQL)
              to interact with data. SQL provides a standardized language for
              querying, manipulating, and managing relational data.
            </li>
            <li className="my-3">
              Scalability: SQL databases are vertically scalable, meaning they
              can handle increasing workloads by upgrading hardware (CPU, RAM,
              etc.). They may have limitations when it comes to horizontal
              scalability across multiple servers.
            </li>
            <li>
              Data Relationships: SQL databases excel at managing complex
              relationships between data entities through joins and foreign key
              constraints. They support primary and foreign keys to enforce data
              integrity.
            </li>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl mb-4">NoSQL Databases: </span>
            <li>
              Structure: NoSQL databases are schema-less or have a flexible
              schema. They allow for dynamic and unstructured data, making it
              easier to adapt to changing data requirements.
            </li>
            <li className="my-3">
              Scalability: NoSQL databases are designed for horizontal
              scalability and can handle large-scale data and high traffic loads
              by distributing data across multiple servers. They scale
              horizontally by adding more servers to the cluster.
            </li>
            <li>
              Data Models: NoSQL databases offer different data models such as
              key-value, document, columnar, and graph databases. Each model
              caters to specific use cases, allowing for efficient storage and
              retrieval of data.
            </li>{" "}
            <li className="my-3">
              Flexibility and Agility: NoSQL databases provide flexibility in
              terms of data structure and schema evolution. They allow for
              faster development iterations and accommodate changing business
              needs without requiring extensive schema modifications.
            </li>
            <li>
              Performance: NoSQL databases can offer high performance and low
              latency for certain use cases by optimizing data access patterns
              and leveraging distributed architectures.
            </li>
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is express js? What is Nest JS
        </div>
        <div className="collapse-content">
          <p className="text-lg font-medium mb-4">
            <span className="font-bold text-2xl"> Express.js: </span>
            <li>
              Express.js is a minimalist and unopinionated web application
              framework for Node.js. It provides a simple and flexible set of
              features for building web applications and APIs. Express.js allows
              developers to handle routing, middleware, request/response
              handling, and other HTTP-related tasks easily. It provides a
              lightweight and modular approach, allowing developers to add
              additional libraries and middleware as needed. With its simplicity
              and flexibility, Express.js is often a popular choice for small to
              medium-sized projects or when developers prefer more control over
              the application architecture.
            </li>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold text-2xl"> Nest.js: </span>
            <li>
              Nest.js, on the other hand, is a progressive and opinionated
              framework for building efficient and scalable server-side
              applications. It is built on top of Express.js and leverages
              TypeScript, providing a robust and structured development
              environment. Nest.js follows the modular design pattern, utilizing
              decorators and TypeScript's static typing to create reusable and
              encapsulated modules. It provides built-in support for features
              like dependency injection, middleware, routing, and more. Nest.js
              is well-suited for larger, enterprise-grade applications that
              require maintainability, scalability, and code organization. It
              embraces concepts from Angular to provide a similar development
              experience and code structure.
            </li>
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box "
      >
        <div className="collapse-title text-xl font-medium">
          4. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <li className="text-lg font-medium">
            The aggregate method in MongoDB is used to perform advanced data
            processing operations on a collection. It takes an array of stages
            as input, where each stage represents a specific operation. The
            stages are executed in order, with the output of each stage serving
            as input for the next stage. This allows for complex queries,
            transformations, aggregations, and computations on the data. The
            result of the final stage is returned as the output of the aggregate
            method.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
