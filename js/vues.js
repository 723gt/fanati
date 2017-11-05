var time_plan = new Vue({
      el: '#time_plan',
      data: {
          times: false
      },
      methods:{
          timeplan: function(){
              console.log("in");
              if(this.times){this.times = false;}
              else{this.times = true;}
          } 
      }
  })