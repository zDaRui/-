import hello from './components/hello';
import entry from './components/entry';
import index from './components/index';
import home from './components/home';
import user from './components/user';
import heart from './components/heart';
import shop from './components/shop';
import groom from './components/groom';
import register from './components/register';
import hobby from './components/hobby';
import info from './components/info';
import all from './components/all';
/*const hello =function(){
	require.ensure(['./components/hello.vue'],
        resolve(require('./components/hello.vue'))
    )
}
const entry =function(){
    require.ensure(['./components/entry.vue'],
        resolve(require('./components/entry.vue'))
    )
}
const index =function(){
    require.ensure(['./components/index.vue'],
        resolve(require('./components/index.vue'))
    )
}
const home =function(){
    require.ensure(['./components/home.vue'],
        resolve(require('./components/home.vue'))
    )
}
const user=function(){
    require.ensure(['./components/user.vue'],
        resolve(require('./components/user.vue'))
    )
}*/
const routes = [
	{
		name:'hello',
		path:'/',
		component: hello
	},
	{
		name:'entry',
		path:'/entry',
		component: entry
	},
	{
		name:'register',
		path:'/register',
		component: register
	},
	{
		name:'index',
		path:'/index',
		component: index,
		children:[
			{path:"/index/user",component: user},
			{path:"/index/",component: home},
			{path:"/index/shop",component: shop},
			{path:"/index/groom",component: groom},
			{path:"/index/heart",component: heart}
		]
	},
	{
		name:'hobby',
		path:'/hobby',
		component: hobby
	},
	{
		name:'info',
		path:'/info',
		component: info
	},
	{
		name:'all',
		path:'/all',
		component: all
	}

]
export default routes
