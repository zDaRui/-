var successRes = {
	"result": 1,
	"success": true,
	"err_msg": "请求处理成功",
	"err_code": 8888
}

var dataTpl = {
	"result": 1,
	"success": true,
	"err_msg": "请求处理成功",
	"err_code": 8888
}

export default {

	// 是否开启本模块 mock
	inservice:true,
    tests(){

        dataTpl.result = '我是数据测试'

        return dataTpl;
    }

}
