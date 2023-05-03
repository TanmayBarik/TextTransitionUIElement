const span1List = document.querySelectorAll('.span1');
const span2List = document.querySelectorAll('.span2');
const span3List = document.querySelectorAll('.span3');
const btn = document.querySelector('.click-btn');

var listOfSpanLists = {span1List,span2List,span3List};

function addMoveIn(spanList){
    spanList.forEach(function(item){
        item.style.animationName = 'move-in'
    });
}

function addMoveOut(spanList){
    spanList.forEach(function(item){
        item.style.animationName = 'move-out'
    });
}

span1List.forEach(function(item){item.style.animationName = 'move-in'});

var i=1;

btn.addEventListener('click',function(){
    if(i%3==0){
        addMoveIn(span1List)
        addMoveOut(span3List)
    }
    else if(i%3==1){
        addMoveIn(span2List)
        addMoveOut(span1List)
    }
    else if(i%3==2){
        addMoveIn(span3List)
        addMoveOut(span2List)
    }
    i++;
})