$(function () {
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if($(this).prop("checked")){
            $(".cart-item").addClass("check-cart-item");//removeClass
        }else{
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });

    $(".j-checkbox").change(function () {
        if ($(this).prop("checked") == true) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        //
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        /* 商品汇总-选中 */
        getSum();
    });
    $(".increment").click(function () {
        var n = $(this).siblings("input").val();
        // console.log(num);
        $(this).siblings("input").val(++n);

        var p = $(this).parent().parent().siblings(".p-price").text();
        p = p.substr(1);
        var r = (p * n).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").text("￥ " + r);
        getSum();
    })

    $(".decrement").click(function () {
        var n = $(this).siblings("input").val();
        if (n == 1) {
            return false;
        }
        $(this).siblings("input").val(--n);

        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        var r = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥ " + r);
        getSum();
    })

    $(".itxt").change(function () {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        var r = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥ " + r);
        getSum();
    })

    function getSum() {
        var num = 0;
        var price = 0;
        // $(".j-checkbox").each(function (i, d) {
        //     var n = $(d).parent().siblings(".p-num").find(".quantity-form input").val();
        //     var p = $(d).parent().siblings(".p-price").html().substr(1);
        //     if ($(d).prop("checked")) {
        //         num += n - 0;
        //         price += p * n;
        //     }
        //     $(".amount-sum em").html(num);
        //     $(".price-sum em").text("￥ " + price.toFixed(2))
        // })
        $(".j-checkbox:checked").parents(".cart-item").find(".itxt").each(function (i, d) {
            num += $(d).val() - 0;
            price += $(this).parents(".p-num").siblings(".p-sum").html().substr(1) - 0;
        })
        $(".amount-sum ").find("em").html(num);
        $(".price-sum").find("em").text("￥ " + price.toFixed(2));
    };
    getSum();

    /* 删除 */
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        // $(".cart-item").empty();
        getSum();
    })

    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        $(".checkall").prop("checked", false);
        getSum();
    })
    $(".clear-all").click(function () {
        // $(".cart-item").remove();
        $(".cart-item-list").empty();
        getSum();
    })
})