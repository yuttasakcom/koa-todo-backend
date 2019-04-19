import mongoose from "mongoose";
import redis from "redis";
import { promisify } from "util";

const redisUrl = process.env.REDIS_URI || "redis://localhost:6379";
const client = redis.createClient(redisUrl);
client.hget = promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");

  return this;
};

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cacheValue = await client.hget(this.hashKey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(d);
  }

  const result = await exec.apply(this, arguments);

  client.hset(
    this.hashKey,
    key,
    JSON.stringify(result),
    "EX",
    process.env.CACHE_EX || 10
  );

  return result;
};

export const clearHash = hashKey => {
  client.del(JSON.stringify(hashKey));
};
