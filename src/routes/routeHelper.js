import React from 'react';
import Loadable from 'react-loadable';
import {Route,Swich} from 'react-router-dom';
import AsyncComponent from './asyncComponent';

const getRoutes = (routes,parentPath='') => (
  <Swich>
    {
      routes.map((route,index) => {
        const {children} = route;
        let {exact} = route;
        route.fullPath = parentPath + route.path;
        const subRoutes = getRoutes(children,route.fullPath);
        const componentWithSubroutes = AsyncComponent(route,subRoutes);
        return <Route key={index}/>
      })
    }
  </Swich>
)

export default getRoutes;

