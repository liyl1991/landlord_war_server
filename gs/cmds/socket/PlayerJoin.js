/**
 * @author liyl
 * @date 2016.2.19
 * copyright 2016 Qcplay All Rights Reserved.
 *
 * 玩家加入游戏
 */

function main(socket, para1)
{
    trace('有玩家加入了');
    socket.emit('joinResult', para1);
}

COMMUNICATE_D.registerSocketCmd('joinGame', main);
