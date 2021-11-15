# ASP.NET Core 6.0 React Typescript SPA Template

## Overview

This Project try to port the old JS SPA React Template to newer Versions of vs with some little adjustments and fixes. Check change section for difference to default vs2022 react js template.

### Structure

- **ReactTypescriptSPATemplate\ClientApp**: This is the React app. The build output in build folder will be served.
- **ReactTypescriptSPATemplate\Controllers**: This has a dummy Web API that the React app can send requests to.
- **ReactTypescriptSPATemplate\Pages**: This has some standard ASP.NET Razor pages.
- **ReactTypescriptSPATemplate\Program.cs**: This specifies where he can find the SPA static files. This also sets up the Web API and Services.
- **ReactTypescriptSPATemplate\WeatherForcast.cs**: This has the model used by the dummy Web API.

### Technology

- Server

  - ASP.NET Core 6.0

- Client
  - React
  - Typescript
  - React Router v6

## Changes from default vs2022 React JS Template

- switch from JS to Typescript
- newer npm package versions
- uses minimal api template
