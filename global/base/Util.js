/**
 * @author chenx
 * @date 2015.10.17
 * copyright 2015 Qcplay All Rights Reserved.
 *
 * 提供常用接口的封装
 */

// 捕获脚本异常处理
process.on('uncaughtException', function(er){

    // 连接断开的异常不处理
    if (er.code == 'ECONNRESET' || er.code == 'EPIPE')
        return;

    error(er.stack)
});

// 取得新的 cookie
var sCookie = 0;
function newCookie()
{
    sCookie = sCookie + 1;
    sCookie = sCookie & 0xffffffff;
    sCookie = sCookie == 0 ? 1 : sCookie;

    return sCookie;
}
global.newCookie = newCookie;

// sha1 加密
function sha1(str)
{
    var crypto = require('crypto');
    var shasum = crypto.createHash('sha1');
    shasum.update(str);
    var sign = shasum.digest('hex');
    return sign;
}
global.sha1 = sha1;

// md5 加密
function md5(str)
{
    var crypto = require('crypto');
    var shasum = crypto.createHash('md5');
    shasum.update(str);
    var sign = shasum.digest('hex');
    return sign;
}
global.md5 = md5;

// 取得随机字符串
function getRandomStr(length)
{
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var strList = [];
    length = length || 16;
    for (var i = 0; i < length; i++)
    {
        var index = Math.floor(Math.random(1) * chars.length);
        strList.push(chars.slice(index, index + 1));
    }

    return strList.join('');
}
global.getRandomStr = getRandomStr;

//uuid生成
var UUID = function () {
    this.id = this.createUUID();
};
UUID.prototype.valueOf = function() {
    return this.id;
};
UUID.prototype.toString = function() {
    return this.id;
};
UUID.prototype.createUUID = function() {
    var c = new Date(1582, 10, 15, 0, 0, 0, 0);
    var f = new Date();
    var h = f.getTime() - c.getTime();
    var i = UUID.getIntegerBits(h, 0, 31);
    var g = UUID.getIntegerBits(h, 32, 47);
    var e = UUID.getIntegerBits(h, 48, 59) + "2";
    var b = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var d = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var a = UUID.getIntegerBits(UUID.rand(8191), 0, 7) +
            UUID.getIntegerBits(UUID.rand(8191), 8, 15) +
            UUID.getIntegerBits(UUID.rand(8191), 0, 7) +
            UUID.getIntegerBits(UUID.rand(8191), 8, 15) +
            UUID.getIntegerBits(UUID.rand(8191), 0, 15);
    return i + g + e + b + d + a;
};
UUID.getIntegerBits = function(f, g, b) {
    var a = UUID.returnBase(f, 16);
    var d = new Array();
    var e = "";
    var c = 0;
    for (c = 0; c < a.length; c++) {
        d.push(a.substring(c, c + 1))
    }
    for (c = Math.floor(g / 4); c <= Math.floor(b / 4); c++) {
        if (!d[c] || d[c] == "") {
            e += "0"
        } else {
            e += d[c]
        }
    }
    return e
};
UUID.returnBase = function(c, d) {
    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B",
        "C",
        "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
        "Q",
        "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    if (c < d) {
        var b = e[c]
    } else {
        var f = "" + Math.floor(c / d);
        var a = c - f * d;
        if (f >= d) {
            var b = this.returnBase(f, d) + e[a]
        } else {
            var b = e[f] + e[a]
        }
    }
    return b
};
UUID.rand = function(a) {
    return Math.floor(Math.random() * a)
};
global.UUID = UUID;
