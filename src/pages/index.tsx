import React from  'react'
const HomePage = React.lazy(() => import("./Home").then(module => ({ default: module.HomePage })));
const ErrorHandler = React.lazy(() => import("./ErrorPage").then(module => ({ default: module.ErrorHandler })));
const FallBackPage = React.lazy(() => import('./FallBackPage').then(module => ({ default: module.FallBackPage })));


export { 
    HomePage,
    ErrorHandler,
    FallBackPage
}