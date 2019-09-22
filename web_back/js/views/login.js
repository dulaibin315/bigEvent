$(".input_sub").click(function() {
    //获取账号输入框的内容
    var userName=$(".input_txt").val()
    //获取密码输入框的内容
    var passWard=$(".input_pass").val()
   user.login(userName,passWard,function(res) {
        if(userName==''||passWard=='') {
            $('#myModalErr').modal('show')
            return;
        }
        if(res.code==200) {
        location.href='index.html'
        }else if(res.code==400) {
        $('#myModal').modal('show')
        }
   })
})



