$("#logOut").click(function () {  
    user.logout(function (res) {
        if (res.code == 200) {
            location.href = 'login.html'
        }
    })
})