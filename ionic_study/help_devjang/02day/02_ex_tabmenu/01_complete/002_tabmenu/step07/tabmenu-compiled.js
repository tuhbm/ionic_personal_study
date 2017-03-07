"use strict";

/// <reference path="../libs/jquery.d.ts" />
var TabMenu = (function () {
    function TabMenu(selector, selIndex) {
        this.selector = "";
        this.$tabMenu = null;
        this.$menuItems = null;
        this.$selectMenuItem = null;
        this.selector = selector;
        this.init();
        this.initEvent();
        this.setSelectItemAt(selIndex);
    }
    TabMenu.prototype.init = function () {
        this.$tabMenu = $(this.selector);
        this.$menuItems = this.$tabMenu.find("li");
        console.log("init", this.$tabMenu);
    };
    TabMenu.prototype.initEvent = function () {
        var _this = this;
        this.$menuItems.on("click", function (e) {
            _this.setSelectItem($(e.target));
        });
    };
    TabMenu.prototype.setSelectItem = function ($menuItem) {
        // 기존 선택메뉴 아이템을 비활성화 처리 하기
        if (this.$selectMenuItem) {
            this.$selectMenuItem.removeClass("select");
        }
        // 신규 아이템 활성화 처리 하기
        this.$selectMenuItem = $menuItem;
        this.$selectMenuItem.addClass("select");
    };
    // index에 해당하는 메뉴 선택
    TabMenu.prototype.setSelectItemAt = function (index) {
        var $menuItem = this.$menuItems.eq(index);
        // 기존 메서드 재사용
        this.setSelectItem($menuItem);
    };
    return TabMenu;
})();
//# sourceMappingURL=tabmenu.js.map

//# sourceMappingURL=tabmenu-compiled.js.map