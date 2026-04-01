# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the GitHub Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error logs or stack traces (if applicable)
   - Your environment details (OS, Node version, npm/pnpm version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **JavaScript (ES6+)** with Node.js
- **ESLint** with Airbnb base configuration for code quality
- **Express.js** for REST API
- **Joi** for input validation

Before submitting:
```bash
# Run linting
npm run lint

# Run tests
npm test

# Test in development mode
npm run dev
```

### Coding Standards

1. **Follow ESLint rules**: The project uses Airbnb's ESLint configuration
2. **Error handling**: Proper error handling with meaningful error messages
3. **Input validation**: All API inputs must be validated using Joi schemas
4. **Naming conventions**: Use camelCase for variables/functions, PascalCase for classes
5. **Async/await**: Prefer async/await over promises for better readability
6. **Configuration**: Use environment variables for configuration (via config module)
7. **Testing**: Write tests for new features using Mocha and Chai

### Adding New Features

When adding new features:
1. Create routes in `src/httpServer/routes/`
2. Add controllers in `src/httpServer/controllers/`
3. Add validation schemas in `src/httpServer/middleware/`
4. Add services in `src/services/`
5. Add configuration to `config/` files
6. Write comprehensive tests in `test/`
7. Update API documentation in README.md

### API Development Guidelines

1. **RESTful conventions**: Follow REST principles for API endpoints
2. **HTTP status codes**: Use appropriate status codes (200, 201, 400, 404, 500, etc.)
3. **Request validation**: All POST/PUT requests must have Joi validation schemas
4. **Error responses**: Return consistent error response format
5. **Authentication**: Add authentication middleware for protected routes (when applicable)

### Testing Guidelines

1. Write tests for all new endpoints
2. Test both success and failure scenarios
3. Mock external services (like S3)
4. Use meaningful test descriptions
5. Ensure tests are independent and can run in any order

Example test structure:
```javascript
describe('endpoint description', () => {
  it('should succeed when valid data provided', async () => {
    // Test implementation
  });

  it('should fail when invalid data provided', async () => {
    // Test implementation
  });
});
```

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
