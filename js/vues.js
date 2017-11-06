var time_plan = new Vue({
      el: '#time_plan',
      data: {
          times: false,
          extension_time: false
      },
      methods:{
          timeplan: function(){
              console.log("in");
              if(this.times){this.times = false;}
              else{this.times = true;}
          },
          extension: function(){
              if(this.extension_time){this.extension_time = false;}
              else{this.extension_time = true;}
          }
      }
  })