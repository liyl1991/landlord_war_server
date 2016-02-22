/**
 * @author liyl
 * @date 2016.2.19
 * copyright 2016 Qcplay All Rights Reserved.
 *
 * 游客玩家注册
 */

function main(socket, param)
{
	console.log(socket.id);
    trace('游客玩家注册，使用昵称：' + param.name);
    //注册
	PLAYER_DAO.queryByName(param.name).then(function(r){
		var flag = r.length > 0,
			result = {};
		if(r.length === 0){
			result.uid = new UUID().id;
			result.name = param.name;
			result.score = 0;
            result.headImgUrl = null;
			PLAYER_DAO.insert(result);
		}
		socket.emit('registerResult', result);
	});
}

COMMUNICATE_D.registerSocketCmd('register', main);
