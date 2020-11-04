        //module-23 vedio 9th
        let personInfo = {name:'Mahin',id:10,work:'student',gender:'male',age:18}
        const {name,work,id} = personInfo;
        console.log(name,work,id)
        //object
        let lifeInfo ={
          names:'nawmi',
          address:{
            proper:'town',
            distric:'mymensingh'
          }
        }
        const {proper}=lifeInfo.address;
        console.log(proper)
        
        //arry
        let strr =['mahin','ashik','redwan','alamgir'];
        const [first,next, ...otherall] = strr;//this is first 2 item 
        console.log(first,next);
        console.log(otherall) // this is other item from first 2 item