# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure you have Node.js v12+ installed

## Configuration

Configuration is managed using the [config](https://www.npmjs.com/package/config) module.

### Environment Variables

Create environment variables or edit config files:
- `config/default.js` - Default configuration
- `config/development.js` - Development overrides
- `config/production.js` - Production overrides
- `config/test.js` - Test environment overrides

### Available Configuration Options

```javascript
{
  sss: {
    url: process.env.AWS_URL || 'https://s3.amazon.com'
  },
  http: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 4001
  }
}
```

## Running Scripts

### Development Mode
Runs the server with hot-reload using nodemon:
```bash
npm run dev
```

**Features:**
- Automatic restart on file changes
- Debug mode enabled
- Runs on port 4001 by default

### Production Mode
Runs the server in production mode:
```bash
npm run start
```

**Prerequisites:**
- Set `NODE_ENV=production`
- Configure production environment variables
- Ensure all dependencies are installed

### Running Tests
Executes the test suite:
```bash
npm test
```

**What it does:**
- Runs all test files matching `*spec.js` pattern
- Uses Mocha test framework with Chai assertions
- Loads test helper with required configuration

## API Endpoints

### GET /api/config/
Retrieves the current configuration.

**Request:**
```bash
curl -X GET http://localhost:4001/api/config/ \
  -H "Content-Type: application/json"
```

**Response:**
```json
{
  "a": "value",
  "b": "value"
}
```

**Status Codes:**
- `200 OK` - Success

### POST /veryhiddenapi/config/
Creates or updates configuration (protected endpoint).

**Request:**
```bash
curl -X POST http://localhost:4001/veryhiddenapi/config/ \
  -H "Content-Type: application/json" \
  -d '{
    "a": "string value",
    "b": "string value"
  }'
```

**Request Body Schema:**
```javascript
{
  a: Joi.string(),
  b: Joi.string()
}
```

**Response:**
- `201 Created` - Configuration created successfully
- `400 Bad Request` - Validation error

## File Structure

### Source Code (`src/`)
```
src/
├── index.js                    # Application entry point
├── httpServer/
│   ├── index.js               # Express server initialization
│   ├── controllers/
│   │   └── configController.js # Config endpoint handlers
│   ├── middleware/
│   │   ├── configSchema.js    # Joi validation schema
│   │   └── validate.js        # Validation middleware
│   ├── routes/
│   │   ├── index.js           # Route initialization
│   │   └── configRoutes.js    # Config routes definition
└── services/
    └── s3Service.js            # S3 service mock
```

### Configuration (`config/`)
```
config/
├── default.js      # Default configuration
├── development.js  # Development overrides
├── production.js   # Production overrides
└── test.js        # Test overrides
```

### Tests (`test/`)
```
test/
├── helper/
│   └── test_helper.js          # Test initialization
└── controllers/
    └── config.spec.js          # Config controller tests
```

## Development

### Adding New Endpoints

1. **Create Route File** (`src/httpServer/routes/yourRoute.js`):
```javascript
const { handler } = require('../controllers/yourController');
const schema = require('../middleware/yourSchema');

module.exports = async (app) => {
  app.get('/api/your-endpoint/', handler);
  app.post('/api/your-endpoint/', schema, handler);
};
```

2. **Create Controller** (`src/httpServer/controllers/yourController.js`):
```javascript
const handler = async (req, res) => {
  // Implementation
  res.json({ success: true });
};

module.exports = { handler };
```

3. **Add Validation Schema** (`src/httpServer/middleware/yourSchema.js`):
```javascript
const Joi = require('@hapi/joi');
const validate = require('./validate');

const yourSchema = (req, res, next) => {
  const schema = Joi.object({
    field: Joi.string().required()
  });
  validate(req, next, schema);
};

module.exports = yourSchema;
```

4. **Register Route** in `src/httpServer/routes/index.js`:
```javascript
const yourRoutes = require('./yourRoutes');

module.exports = (app) => {
  yourRoutes(app).then();
};
```

5. **Write Tests** in `test/controllers/your.spec.js`

### Linting

The project uses ESLint with Airbnb configuration:
```bash
npm run lint
```

To fix auto-fixable issues:
```bash
npx eslint --fix .
```

## Debugging

Enable debug output:
```bash
DEBUG=app,app:* npm run dev
```

## Troubleshooting

### Port Already in Use
Change the port in environment variables:
```bash
PORT=4002 npm run dev
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tests Failing
Ensure test environment is set:
```bash
NODE_ENV=test npm test
```

## Notes

- Default server runs on `http://localhost:4001`
- The application uses Express.js body-parser for JSON parsing
- All routes are automatically prefixed (e.g., `/api/`, `/veryhiddenapi/`)
- Configuration is environment-specific using the config module
- S3 service is currently mocked (placeholder implementation)

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
