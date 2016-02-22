
var PlayerDao = {};
var TABLE_ITEMS = '';
var dbName = 'landlord';
//查询所有
PlayerDao.queryAll = function(){
    return MYSQL_D.query(dbName, 'select * from player');
};

//查询名称
PlayerDao.queryByName = function(name){
    return MYSQL_D.query(dbName, 'select * from player where nickname = ?', [name]);
};

//查询名称
PlayerDao.queryByUid = function(uid){
    return MYSQL_D.query(dbName, 'select * from player where uid = ?', [uid]);
};

//更新分数
PlayerDao.updateScore = function(uid, score){
    return MYSQL_D.query(dbName, 'update player set total_score = ? where uid = ?', [score, uid]);
};

//插入
PlayerDao.insert = function(obj){
    var sql = 'insert into player(uid, nickname, head_img_url, total_score) values(?, ?, ?, ?)',
        params = [obj.uid, obj.name, obj.headImgUrl, obj.score];
    MYSQL_D.query(dbName, sql, params).then(function(r){
        console.info(r);
    });
};
global.PLAYER_DAO = module.exports = PlayerDao;
