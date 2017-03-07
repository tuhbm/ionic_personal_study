/// <reference path="../libs/jquery.d.ts" />

class TabMenu{
    private selector:string = "";
    private $tabMenu:JQuery = null;
    private $menuItems:JQuery = null;
    private $m:JQuery = null;

    private $selectMenuItem:JQuery = null;
    constructor(selector, selIndex){
        this.selector = selector;

        this.init();
        this.initEvent();
        this.setSelectItemAt(selIndex)
    }

    private init(){
        this.$tabMenu = $(this.selector);
        this.$menuItems = this.$tabMenu.find("li");
        console.log("init", this.$tabMenu);
    }

    private initEvent(){
        this.$menuItems.on("click", (e)=>{
            this.setSelectItem($(e.target));
        });
    }

    public setSelectItem($menuItem){
        // 기존 선택메뉴 아이템을 비활성화 처리 하기
        if (this.$selectMenuItem) {
            this.$selectMenuItem.removeClass("select");
        }

        // 신규 아이템 활성화 처리 하기
        this.$selectMenuItem = $menuItem;
        this.$selectMenuItem.addClass("select");
    }
    // index에 해당하는 메뉴 선택
    public setSelectItemAt(index){
        var $menuItem = this.$menuItems.eq(index);
        // 기존 메서드 재사용
        this.setSelectItem($menuItem);
    }

} 