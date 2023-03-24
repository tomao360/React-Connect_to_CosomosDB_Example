const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://localhost:8081";
const key =
  "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
const databaseName = "northwindProducts";
const containerName = "products";

const client = new CosmosClient({ endpoint, key });

const container = client.database(databaseName).container(containerName);

export const getProducts = async () => {
  try {
    const { resources } = await container.items.readAll().fetchAll();
    console.log(resources, "products");
    return resources;
  } catch (error) {
    console.error(error);
  }
};
