import React from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Spin ,Icon} from 'antd';
import {Route,Swich,Redirect} from 'react-router-dom'

const Loading = () => (
  <Spin indicator={<Icon type="loading"
    style={{ fontSize: 24 }}
    spin />} />
);

const AsyncComponent = (routes,subRoutes) =>{
  const { redirect } = route;
  let { component } = route;

  if(!component().then()) {
    return component();
  }
  return Loadable({
    loading:Loading,
    loader:() => {
      NProgress.start();
      return component().then((module) => {
        NProgress.done();
        return module;
      }).catch(() => {
        NProgress.done();
      });
    },
    render:(loaded, props) => {
      const Component = loaded.default;
      if(route.fullPath === props.location.pathname || route.fullPath === '*') {
        return (
          <Redirect from={routes.fullPath} to={redirect}></Redirect>
        )
      }
      return <Component {...props}>{subRoutes}</Component>;
    }
  })
};

export default AsyncComponent;

