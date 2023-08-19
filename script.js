
// function reuse 
let total1 = 0;
function setPrice(totalId,priceNum){
    const total = document.getElementById(totalId);
    total1 += priceNum;
    let total2 = total1.toFixed(2);
    total.innerText = `${total2} TK`;
    if(total1 >= 200){
        document.getElementById('btn-kupon').removeAttribute('disabled');
    }
};
function setTitle(id,title){
   let container = document.getElementById(id);
   let count = container.childElementCount;
   const p = document.createElement('p');
   p.innerText = `${count + 1}. ${title}`;
   container.appendChild(p);
}
function kupon(){
    const kupon1 = document.getElementById('kupon-input');
    const kupon = kupon1.value
    const discountTag = document.getElementById('discount');
    const totalPrice = parseFloat(document.getElementById('total-price').innerText.split(' ')[0]);
    const total = document.getElementById('total');
    

    if(kupon == 'SELL200'){
        let parsent =  totalPrice / 100;
        let parsent20 = 20 * parsent;
        let discount1 = parsent20.toFixed(2);
        discountTag.innerText = `${discount1} TK`
        let total1 = totalPrice - parsent20;
        let total2 = total1.toFixed(2);
        total.innerText = `${total2} TK`
        kupon1.value = '';
    }
    
}




function card1(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1);
    totalTaka();
};

function card2(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1);
    totalTaka();
}

function card3(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1);
    totalTaka();
}

function card4(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1);
    totalTaka();
}

function card5(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1)
    totalTaka();
}

function card6(data){
    const title1 = data.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(data.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    setPrice('total-price',price);
    setTitle('title-container',title1)
    totalTaka();
}

function totalTaka(){
    const price2 =  parseFloat(document.getElementById('total-price').innerText.split(' ')[0]);
    if(price2 > 0){
    document.getElementById('btn-modal').removeAttribute('disabled')};
}

function modal(){
    const titleContainer = document.getElementById('title-container');
    const totalPrice = document.getElementById('total-price');
    const discount = document.getElementById('discount');
    const price = document.getElementById('total');
    const btnKupon = document.getElementById('btn-kupon');
    const btnModal = document.getElementById('btn-modal');
    btnModal.disabled = true;
    btnKupon.disabled = true;
    titleContainer.innerText = '';
    total1 = 0;
    totalPrice.innerText = '00.00 TK';
    discount.innerText = '00.00 TK';
    price.innerText = '00.00 TK';
    
}