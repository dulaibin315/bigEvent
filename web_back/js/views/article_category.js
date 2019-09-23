function getContent() {
    Art.category(function (res) {
        var htmlStr = template('tmp', res);
        $('tbody').html(htmlStr)
    })
}
//获取文章的信息
$(function () {
    getContent();
})
//
$('#a_add').click(function() {
    $('#model_edit').hide();
    $('#model_add').show();
})
//增加功能
$('#model_add').click(function () {
    var name = $('#addName').val();
    var slug = $('#addSlug').val();
    Art.categoryAdd(name, slug, function (res) {
        getContent();
        $('#addModal').modal('hide');
        $('#addName').val('');
        $('#addSlug').val('');
    })
})
//删除功能
$('tbody').on('click', 'a', function () {
    var id = $(this).attr('data-id');
    Art.categoryDel(id, function (res) {
        getContent();
    })

})
//编辑功能
$('tbody').on('click', '#Edit', function () {
    $('#addModal').modal('show');
    $('#model_add').hide();
    $('#model_edit').show();
    $('.modal-title').html('编辑信息');
    var id = $(this).next().attr('data-id');
    console.log(id)
    $('#model_edit').click(function () {
        $('#addModal').modal('hide');
        var name = $('#addName').val();
        var slug = $('#addSlug').val();
        console.log(id,name,slug)
        Art.categoryEdit(id,name,slug,function(res) {
            getContent();
        })
        $('#addName').val('');
        $('#addSlug').val('');
    })
})