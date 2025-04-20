# Publishing to NPM

## Project Structure Verification
- Check `package.json` for current configuration
- Verify README.md for package description
- Check `.npmignore` file for excluded content

## Pre-Publishing Steps
1. Login to npm: `npm login`
2. Verify package readiness:
   - Confirm package name in package.json
   - Verify entry points (main, module, exports)
   - Check .npmignore configuration
   - Verify files array in package.json
3. Run npm verification: `npm publish --dry-run`

## Publishing Options
- Publish to public npm registry (for scoped packages)
- Publish to GitHub Packages or another registry

## Troubleshooting
- **Scope not found error**: This indicates the specified scope hasn't been created yet
- Solutions:
  - Create a new scope on npm.org (requires a paid account for private packages, free for public packages)
  - Use an unscoped package name

## Publishing with Unscoped Name
1. Edit package.json to use an unscoped name
2. Update README.md to reflect the new package name
3. Publish with: `npm publish`

## Post-Publishing
- Package available at: https://www.npmjs.com/package/gmahima-calculator-client
- Users can install the package using: `npm install gmahima-calculator-client`

## Future Updates
1. Make code changes
2. Update version in package.json using semantic versioning (major.minor.patch)
3. Run `npm publish` again