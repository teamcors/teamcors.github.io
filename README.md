![profile-large](https://github.com/teamcors/teamcors.github.io/assets/77003554/81d07ac3-06b6-4eee-9d41-6e25aec672c7)

## Conventions
### Branch Rules
- `develop/{issue_number}`: for blog maintenance
- `docs/{issue_number}`: for markdown relatives
- `gh-pages`: for deployment

### Commit Rules
- _SEMANTIC COMMITS that @Queue-ri told you._
- All commit messages should contain issue numbers.


## Manual Deployment
Before you deploy, you must check if:
- all edits are **merged** into `main` branch
- you're currently on `main` branch
- the deployment commit message contains the **lastest SHA of `main` branch**

then launch:
```
npm run deploy -- -m "chore: Deploy {latest_main_sha}"
```
