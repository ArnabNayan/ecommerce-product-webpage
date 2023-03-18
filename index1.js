let count=1
let result=1
document.getElementById('cart').addEventListener('click',function(){
   
  document.getElementById('add-cart1').innerText=count++
 
   document.getElementById('case-number-field').value=result++

})
document.getElementById('cart1').addEventListener('click',function(){
    
   document.getElementById('card').innerHTML=`
  
   <div class="card-body">
   <img src="./images/image-product-1.jpg">
     <h2 class="card-title text-2xl">Price:${'$50'}</h2>
     <p>20% offer</p>
   <img src="./images/image-product-2.jpg">
     <h2 class="card-title text-2xl">Price:${'$100'}</h2>
     <p>20% offer</p>
   <img src="./images/image-product-3.jpg">
     <h2 class="card-title text-2xl">Price:${'$80'}</h2>
     <p>20% offer</p>
   <img src="./images/image-product-4.jpg">
     <h2 class="card-title text-2xl">Price:${'$60'}</h2>
     <p>10% offer</p>
   
   `
})
