function arrays(num){ 
    let arr = []
    for(let i =0; i < num; i++) { 

        arr.push(i)
    }
    return arr
}

const App = { 

    data() { 
        return { 
            msg: "hello world",
            arrs: arrays, 
            data: null 
        }
    }, 
    mounted() {

        this.data = [
            
            {

            "id": 1,
            "name_foot": "burger", 
            "img": '/img/k.png', 
            "price": "$5000",
            "rating": 5
        },{
            "id": 2,
            "name_foot": "Pizza", 
            "img": '/img/pizza.png', 
            "price": "$5000",
            "rating": 3
        },{
            "id": 3,
            "name_ot": "Chicken", 
            "img": '/img/chiken.png', 
            "price": "$5000",
            "rating": 4
        },{
            "id": 4,
            "name_foot": "crispy chicken", 
            "img": '/img/Chis.png', 
            "price": "$5000",
            "rating": 2
        },{
            "id": 5,
            "name_foot": "Friend chicken", 
            "img": '/img/Chis1.png', 
            "price": "$5000",
            "rating": 2
        
        },
            {
            "id": 6,
            "name_foot": "burger", 
            "img": '/img/k.png', 
            "price": "$5000",
            "rating": 5
        },{
            "id": 7,
            "name_foot": "Pizza", 
            "img": '/img/pizza.png', 
            "price": "$5000",
            "rating": 3
        },{
            "id": 8,
            "name_foot": "Chicken", 
            "img": '/img/chiken.png', 
            "price": "$5000",
            "rating": 4
        },{
            "id": 9,
            "name_foot": "crispy chicken", 
            "img": '/img/Chis.png', 
            "price": "$5000",
            "rating": 2
        },{
            "id": 10,
            "name_foot": "Friend chicken", 
            "img": '/img/Chis1.png', 
            "price": "$5000",
            "rating": 2
        
        }
    
    ]
        
    }
}
Vue.createApp(App).mount('#apps')

