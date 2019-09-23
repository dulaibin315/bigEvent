/**
 * 所有对文章的操作都放在这儿
 */
var Art={
    /**
     * 
     * @param {*} fn 回调函数
     */
    category:function(fn) {
        $.get(
            urlObj.category,
            function(res){
                fn(res)
            }
        )
    },

    /**
     * 
     * @param {*} name 参数
     * @param {*} slug 参数
     * @param {*} fn 回调函数
     */
    categoryAdd:function(name,slug,fn) {
        $.post(
            urlObj.categoryAdd,
            {
                name:name,
                slug:slug
            },
            function(res) {
                fn(res)
            }
        )
    },

    /**
     * 
     * @param {*} id 参数
     * @param {*} fn 回调函数
     */
    categoryDel:function(id,fn) {
        $.post(
            urlObj.categoryDel,
            {
                id:id
            },
            function(res) {
                fn(res)
            }
        )
    },

    categoryEdit:function(id,name,slug,fn) {
        $.post(
            urlObj.categoryEdit,
            {
                id:id,
                name:name,
                slug:slug
            },
            function(res) {
                fn(res);
            }
        )
    }
}