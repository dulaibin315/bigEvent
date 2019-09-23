/**
 * 用户操作部分
 */
var user = {
    /**
     * 
     * @param {*} userName 账号
     * @param {*} passWard 密码
     * @param {*} fn 回调函数
     */
    login: function (userName, passWard, fn) {
        $.post(
            urlObj.login, {
                user_name: userName,
                password: passWard
            },
            function (res) {
                fn(res)
            }
        )
    },
    /**
     * 
     * @param {*} fn 回调函数
     */
    logout: function (fn) {
        $.post(
            urlObj.logout,
            function (res) {
                fn(res)
                console.log(res)
            }
        )
    },
    /**
     * 
     * @param {*} nickname 用户昵称
     * @param {*} user_pic 用户图片地址
     * @param {*} fn 回调函数
     */
    getuser: function(fn) {
        $.get(
            urlObj.getuser,
            function(res) {
                fn(res)
            }
        )
    },

    userPerson:function(fn) {
        $.get(
            urlObj.userPerson,
            function(res) {
                fn(res)
            }
        )
    },

    userPerson_edit:function(fd,fn) {
        $.ajax({
            url:urlObj.userPerson_edit,
            type:'post',
            contentType:false,
            processData:false,
            data:fd,
            success:function(res) {
                fn(res)
            }
        })
    }

}