$(function () {
    getComment();
    $("#formAddCmt").on("submit", function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            if (res.status !== 201) {
                return alert('发表评论失败！')
            }
            getComment();
            $('#formAddCmt')[0].reset()
        })
    })


})

function getComment() {
    $.ajax({
        type: 'get',
        url: "http://www.liulongbin.top:3006/api/cmtlist",
        data: [],
        success: function (res) {
            if (res.status !== 200) return alert("获取数据列表失败！");
            var rows = [];
            $.each(res.data, function (i, d) {
                rows.push('<li class="list-group-item" id=' + d.id + '><span class="badge username" style="background-color: #F0AD4E;">' + d.time + '</span><span class="badge content" style="background-color: #5BC0DE;">' + d.username + '</span>' + d.content + '</li>');
            });
            $(".list-group").empty().append(rows.join(''));
        }
    })
}