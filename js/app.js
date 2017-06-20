if(document.getElementById("vue-basket")){
  var basket = new Vue({
    el: '#vue-basket',
    data: {
      total: 0
    },
    methods: {
      totalPrice: function(){
        var total = this.total;

        return total.toFixed(2)+'zł';
      }
    }
  })
}


if(document.getElementById("vue-cart")){
  var cart = new Vue({
    el: '#vue-cart',
    data: {
      items: [
        {
          image: 'https://dummyimage.com/50x100/000/fff',
          description: 'MINI DRESS<br/>KOLOR: JASNY SZARY MELANZ<br/>ROZMIAR: S',
          size: 'S',
          price: 120,
          quantity: 2,
        },
        {
          image: 'https://dummyimage.com/50x100/000/fff',
          description: 'MINI DRESS<br/>KOLOR: JASNY SZARY MELANZ<br/>ROZMIAR: XL',
          size: 'XL',
          price: 110,
          quantity: 1
        },
        {
          image: 'https://dummyimage.com/50x100/000/fff',
          description: 'MINI DRESS<br/>KOLOR: JASNY SZARY MELANZ<br/>ROZMIAR: M',
          size: 'M',
          price: 130,
          quantity: 1
        }
      ]
    },
    methods: {
      addOne: function(index){
        this.items[index].quantity++;
      },
      removeOne: function(index){
        if (this.items[index].quantity!=1){
          this.items[index].quantity--;
        }
      },
      remove: function(index){
        this.items.splice(index, 1)
      },
      total: function(){
        var total = 0;
        this.items.forEach(function(item){
          total += item.price*item.quantity;
        });
        return total.toFixed(2)+'zł';;
      }
    }
  })
}

if(document.getElementById("vue-grid")){
  var cart = new Vue({
    el: '#vue-grid',
    data: {
      items: [
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,},
        {image: 'https://dummyimage.com/400x500/000/fff', name: 'MINI DRESS', price: 120,}
      ]
    }
  })
}