// action 会收到 store 作为它的第一个参数
const add=function({commit,state}){
	commit("add",1)   //注册mutations中的add事件
};
const cut=function({commit,state}){
	commit("cut",1)   //注册mutations中的add事件
};
const changeCurIndex=function({commit,state},index){
	// dispatch("changeCurIndex",index);
	commit("changeCurIndex",index)
}
const increment=function({commit,state}){
	commit('increment')
}
const decrement=function({commit,state}){
	commit('decrement')
}

export {
	add,
	cut,
	changeCurIndex,
	increment,
	decrement
}