import { Endpoint, Key } from "./config";

const { CosmosClient } = require("@azure/cosmos");

const endpoint = Endpoint;
const key = Key;
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
