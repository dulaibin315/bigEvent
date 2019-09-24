$(function () {
    user.userPerson(function (res) {
        $('#inputEmail3').val(res.data.username);
        $('#inputEmail4').val(res.data.nickname);
        $('#inputEmail6').val(res.data.password);
        $('#inputEmail5').val(res.data.email);
    })
})
var tmpFilePath;
//选择图片部分
$('#exampleInputFile').change(function () {
    // console.dir(this);

    // console.log(this.files[0].name)
    // $('.user_pic').attr('src','images/'+this.files[0].name)
    var file = this.files[0];
    tmpFilePath = URL.createObjectURL(file);
    $('.user_pic').attr('src', tmpFilePath);
})
//点击修改按钮部分
$('#PersonEdit').click(function () {
    var fd = new FormData($('#MyForm')[0])
    user.userPerson_edit(fd, function (res) {
        if (res.code == 200) {
            user.getuser(function(res) {
                // console.log(tmpFilePath)
                if(res.code==200) {
                    console.log(window.document.getElementById("indexImg"))
                    // $(".user_info img").prop('src',res.data.user_pic)
                    // $(".user_info span").html(res.data.nickname)
                    // window.parent.document.querySelector("#indexImg").src=tmpFilePath
                }  
              }) 
           
        }
    })
})
   