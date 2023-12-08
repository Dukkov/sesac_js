export class Paginator {
    setItemList(itemList) {
        this.itemList = itemList;
    }

    setItemsPerPage(num) {
        this.itemsPerPage = num;
    }

    setPageNum(num) {
        this.pageNum = num;
    }

    getTotalPage() {
        return (Math.ceil(this.itemList.length / this.itemsPerPage));
    }

    getCurrentPage() {
        this.startIndex = (this.pageNum - 1) * this.itemsPerPage;
        this.endIndex = this.pageNum * this.itemsPerPage;

        return (this.itemList.slice(this.startIndex, this.endIndex));
    }
}