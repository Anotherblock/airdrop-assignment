# Airdrop assignment

We want to airdrop tokens to our holders. For each token a user holds, they will receive 0.1 ETH. In order to make it performant, we can only airdrop to 10 users in the same call and block. So we have to wait for the airdrop function to succeed before calling it again.

Sometimes, the airdrop function can fail and end the node script with `exit 1` and we have to run it again. After restarting the script, we need to know which users we have already sent tokens to so that we don't airdrop to them multiple times.

## Instructions

### API
Fetch all anotherblock users and holdings using graphql from endpoint `https://api.thegraph.com/subgraphs/name/anotherblock/anothergraph`

Query will look like this (id = user address) ```{
  users {
    id
    holdings {
      totalQuantity
    }
  }
} ``` 

### Airdrop 
There is already a prepared function called `airdrop` that expects an array of receivers with `amount` + `address`

### Persist data
Feel free to use whatever tool you see fit to persist the progress of the airdrop. For reference we are using drizzle-orm at anotherblock for our backend

### Dependencies
Feel free to use whatever dependency and package you see fit

### Get up and running
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
