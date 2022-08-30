# Exploring Micro FE using Module Federation

## What is Micro Frontend?

All the SPA built with React, Vue, or Angular are monolithic web applications. When we take different major features and break them down into different applications and then connect them when required, it's known as Micro Frontend.
We try to minimize any direct connection between the different applications.
There are 3 types of integration

1. Build time integration
2. Run time integration
3. Server-side integration

Build time integration is when the web application components are deployed on an NPM registry as a package and then other apps use it. For this example, Material UI library which is created by a team of engineers and used by other engineers.

Run time integration does not depend on the build package it fetches component from other URL and mounts it on the consumer's web applications. This is more complex to set up but the component flow is dynamic and independent.

There can be multiple ways to achieve run time integration but the recent and popular way is to use webpack **Module Federation.**

## Understanding Webpack at high level

Webpack at the core is a module bundler that takes in all the dependencies and the actual file and produces a bundle out of it. We can plug this bundled JavaScript file into an HTML file directly using a plugin called HTML webpack plugin.

## Integrating two stand-alone web-based application with Vanilla JavaScript

When using module federation with webpack a few different files other than the bundled file are generated. They generally are as follows

1. remoteEntry.js
2. src_file.js
3. vendor.js

These files are then consumed by the consumer and used accordingly

remoteEntry is like a manifest file that contains information regarding how to use the remote component in the consumer's env. While other two files or more depending on the use case and contain the actual code of the component that is been exposed

In the world of MFP, there are hosts and remotes. A host requires code from the remote

The HTML template of the remote is only used in development on other hand the host template file is used in development and production. Remote only provides the script file that manipulates everything on the container/host

## Steps to follow in order to get this project up and running

```
cd cart
npm install
npm run start
```

```
cd container
npm install
npm run start
```

```
cd products
npm install
npm run start
```

By doing this you get three servers up and running on port 8080, 8081, and 8082 where 8080 is the container which holds the cart and products and other ports are for products and cart respectively.
