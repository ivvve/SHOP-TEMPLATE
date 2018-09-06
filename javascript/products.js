$(".sidebar-type").on("click", function () {
    if (this.parentElement.children[1].style.display == "block")
    {
        this.parentElement.children[1].style.display = "none";
    }
    else
    {
        this.parentElement.children[1].style.display = "block";
    }
})

var test;
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.dropdown = this.dd.find('.dropdown');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val.toUpperCase());
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}

$(function () {

    var dd = new DropDown($('#dd'));

    $(document).click(function () {
        $('.wrapper-dropdown').removeClass('active');
    });

});

