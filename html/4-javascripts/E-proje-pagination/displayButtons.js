const displayButtons = (container,pages,activeIndex) => {
    let btns=pages.map((_,pageIndex)=>{
        return `<button class="page-btn${activeIndex==pageIndex?"active-btn": "null"}">${pageIndex+1}</button>`
    });
} ;

export default displayButtons;