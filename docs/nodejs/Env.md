# Using Environment Variables with NodeJS

# Within Scripts and Shell Commands

```javascript
process.env.EXAMPLE_URI; // e.g. within index.js
```

```shell
EXAMPLE_URI=mongodb://localhost:27107/foo node index.js
```

## With `.env` File

```shell
yarn add dotenv
touch .env
vi .env // add EXAMPLE_URI=mongodb://localhost:27107/foo
```

```javascript
require('dotenv').config(); // e.g. within index.js
```

```shell
node index.js
```
