$(function() {
    user.getuser(function(res) {
      if(res.code==200) {
          $(".user_info img").prop('src',res.data.user_pic)
          $(".user_info span").html(res.data.nickname)
      }  
    })     
})