function nav_list_open(){
    document.getElementById('nav-btd-open').style.display="none";
    document.getElementById('nav-btd-close').style.display="inline";
    document.getElementById('nav-mobile').style.display="block";
    document.getElementById('intro').style.display="none";
};
function nav_list_close(){
    document.getElementById('nav-btd-open').style.display="inline";
    document.getElementById('nav-btd-close').style.display="none";
    document.getElementById('nav-mobile').style.display="none";
    document.getElementById('intro').style.display="flex";
};

// -----------------------------------------------------------------------------------------------------------------
// ---------------------------------------animated part stats here--------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger)
gsap.from('.hello', { opacity: 0, x: 20})
const menu_items = document.querySelector('.navbar-left')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1,
    stagger: {
        amount: 1
    }
})

gsap.utils.toArray('.inner').forEach(inner=> {
    gsap.fromTo(inner,{
        width:0
    },{
        width:'30%',
        duration:2,
        scrollTrigger:inner,
        ease:'circ.out'
    })
})
gsap.fromTo('#circle',{
    scale:0
},{
    scale:1,
    duration:4
})
gsap.fromTo('#button',{
    opacity:0
},{
    opacity:1,
    duration:2
})
gsap.fromTo('#heading_1',{
    opacity:0,
    x:100
},{
    x:0,
    opacity:1,
    duration:1
})
const heading_1=document.querySelector('#website_part_2')
gsap.utils.toArray('.inner_2').forEach(inner_2=> {
    gsap.fromTo(inner_2,{
        width:0
    },{
        width:'30%',
        duration:2,
        scrollTrigger:heading_1,
        ease:'circ.out'
    })
})

gsap.to('#inner_left',{
    background:'linear-gradient(90deg, #1D3A65, #01010100)',
    duration:0.7,
    scrollTrigger:heading_1
})
gsap.to('#inner_right',{
    background:'linear-gradient(270deg, #1D3A65, #01010100)',
    duration:0.7,
    scrollTrigger:heading_1
})
gsap.utils.toArray('.item').forEach(item=>{
    gsap.fromTo(item,{
        x:'-100%'
    },{
        x:0,
        duration:1,
        scrollTrigger:item
    })
})





const number= document.getElementById('number_1')

const updateCount= () => {
    const value= parseInt(number.dataset.value);
    let startValue= 0;
    const increaseCount = setInterval(() => {
        startValue+=1;
        if(startValue>value){
            number.textContent= `${value}`;
            clearInterval(increaseCount);
            return;
        }
        number.textContent=`${startValue}`
    }, 150);
}
updateCount()





const number_2= document.getElementById('number_2')

const updateCount_2= () => {
    const value= parseInt(number_2.dataset.value);
    let startValue= 0;
    const increaseCount = setInterval(() => {
        startValue+=1;
        if(startValue>value){
            number_2.textContent= `${value}`;
            clearInterval(increaseCount);
            return;
        }
        number_2.textContent=`${startValue}`
    }, 250);
}
updateCount_2()




const number_3= document.getElementById('number_3')

const updateCount_3= () => {
    const value= parseInt(number_3.dataset.value);
    let startValue= 0;
    const increaseCount = setInterval(() => {
        startValue+=1;
        if(startValue>value){
            number_3.textContent= `${value}`;
            clearInterval(increaseCount);
            return;
        }
        number_3.textContent=`${startValue}`
    }, 100);
}
updateCount_3()






const number_4= document.getElementById('number_4')

const updateCount_4= () => {
    const value= parseInt(number_4.dataset.value);
    let startValue= 0;
    const increaseCount = setInterval(() => {
        startValue+=1;
        if(startValue>value){
            number_4.textContent= `${value}`;
            clearInterval(increaseCount);
            return;
        }
        number_4.textContent=`${startValue}`
    }, 5);
}
updateCount_4()



// const thing = document.querySelector('.thing')
gsap.utils.toArray('.thing').forEach(thing=>{
    gsap.fromTo(thing,{
        opacity:0,
        y:20
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:thing
    })
})





const heading_2=document.querySelector('#website_part_3')
gsap.utils.toArray('.inner_3').forEach(inner_3=> {
    gsap.fromTo(inner_3,{
        width:0
    },{
        width:'30%',
        duration:2,
        scrollTrigger:heading_2,
        ease:'circ.out'
    })
})
gsap.fromTo('.image',{
    scale:0.2
},{
    scale:1,
    duration:2,
    scrollTrigger:'.para'
})
gsap.fromTo('.para',{
    scale:0.2
},{
    scale:1,
    duration:2,
    scrollTrigger:'.para'
})

gsap.utils.toArray('.brand').forEach(brand=>{
    gsap.fromTo(brand,{
        opacity:0,
        y:20
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:brand
    })
})

gsap.fromTo('#button_3',{
    opacity:0,
    y:'20px'
},{
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:'#button_3'
})
gsap.fromTo('#heading_9',{
    opacity:0,
    y:'100px'
},{
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:'#heading_9'
})

gsap.fromTo('#form',{
    y:'10%',
    opacity:0
},{
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:'#form'
})
gsap.to('#form',{
    boxShadow:'10px 10px 2px 0px rgba(0,0,0,0.5)',
    duration:0.2,
    scrollTrigger:'#form'
})