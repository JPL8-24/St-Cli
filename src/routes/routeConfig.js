export const routesConfig = [
  {
    path:'/',
    redirect:'/home'
  }
  ,
  {
    path:'/home',
    component : () => import('../pages/home/index.js')
  }
]