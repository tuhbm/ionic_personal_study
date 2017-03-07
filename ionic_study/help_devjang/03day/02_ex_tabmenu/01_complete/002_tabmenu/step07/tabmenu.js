/// <reference path="../libs/jquery.d.ts" />
class TabMenu {
    constructor(selector, selIndex) {
        this.selector = "";
        this.$tabMenu = null;
        this.$menuItems = null;
        this.$m = null;
        this.$selectMenuItem = null;
        this.selector = selector;
        this.init();
        this.initEvent();
        this.setSelectItemAt(selIndex);
    }
    init() {
        this.$tabMenu = $(this.selector);
        this.$menuItems = this.$tabMenu.find("li");
        console.log("init", this.$tabMenu);
    }
    initEvent() {
        this.$menuItems.on("click", (e) => {
            this.setSelectItem($(e.target));
        });
    }
    setSelectItem($menuItem) {
        // 기존 선택메뉴 아이템을 비활성화 처리 하기
        if (this.$selectMenuItem) {
            this.$selectMenuItem.removeClass("select");
        }
        // 신규 아이템 활성화 처리 하기
        this.$selectMenuItem = $menuItem;
        this.$selectMenuItem.addClass("select");
    }
    // index에 해당하는 메뉴 선택
    setSelectItemAt(index) {
        var $menuItem = this.$menuItems.eq(index);
        // 기존 메서드 재사용
        this.setSelectItem($menuItem);
    }
}
//# sourceMappingURL=tabmenu.js.map