//Projects Section
document.querySelector('.iphoneClick').addEventListener('click',()=>{
    brand('.vivo','.oppo','.mi','.iphone');
    active('.miClick','.oppoClick','.vivoClick','.iphoneClick');
});
document.querySelector('.vivoClick').addEventListener('click',()=>{
    brand('.iphone','.oppo','.mi','.vivo');
    active('.miClick','.oppoClick','.iphoneClick','.vivoClick');
});
document.querySelector('.oppoClick').addEventListener('click',()=>{
    brand('.vivo','.iphone','.mi','.oppo');
    active('.miClick','.vivoClick','.iphoneClick','.oppoClick');
});
document.querySelector('.miClick').addEventListener('click',()=>{
    brand('.vivo','.oppo','.iphone','.mi');
    active('.oppoClick','.vivoClick','.iphoneClick','.miClick');
});

const brand = (name1,name2,name3,name4) =>{
    document.querySelector(name1).classList.add('none');
    document.querySelector(name2).classList.add('none');
    document.querySelector(name3).classList.add('none');
    document.querySelector(name4).classList.remove('none');
};

const active = (name1,name2,name3,name4) =>{
    document.querySelector(name1).classList.remove('active');
    document.querySelector(name2).classList.remove('active');
    document.querySelector(name3).classList.remove('active');
    document.querySelector(name4).classList.add('active');
};