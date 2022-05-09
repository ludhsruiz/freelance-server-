--------- SERVER -----------


  AUTH /api

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/signup` | Signup |
| `POST` | `/login` | Login |
| `POST` | `/logout` | Logout |


  USERS /api/users

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Users |                   
| `PUT` | `/:user_id/edit` | Edit User |
| `DELETE` | `/:user_id/delete` | Delete User | 
| `PUT` | `/:user_id/follow` | Follow user |        
| `PUT` | `/:user_id/unfollow` | Unfollow User |    


PUBLISHER /api/publishers/                        

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Publisher |
| `POST` | `/create` | Create Publisher |
| `PUT` | `/:publisher_id/edit` | Edit Publisher |
| `DELETE` | `/:publisher_id/delete` | Delete Publisher |
| `PUT` | `/:publisher_id/follow` | Follow Publisher |
| `PUT` | `/:publisher_id/unfollow` | Unfollow Publisher |


  EVENTS /api/events/

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Events |
| `POST` | `/create` | Create Events |
| `PUT` | `/:events_id/edit` | Edit Events |
| `DELETE` | `/:events_id/delete` | Delete Events |
| `PUT` | `/:events_id/add-to-att` | Add Events to Attendance |
| `PUT` | `/:events_id/subtract-from-att` | Subtract Events from Attendance |



  COURSES /api/courses/


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Courses |
| `POST` | `/create` | Create Courses |
| `DELETE` | `/:course_id/delete` | Delete Course |
| `PUT` | `/:course_id/add-to-att` | Add Course to Attendance |
| `PUT` | `/:course_id/subtract-from-att` | Subtract Course from Attendance |



  OFFERTS /api/offerts/


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Offerts |
| `POST` | `/create` | Create Offerts |
| `PUT` | `/:offers_id/edit` | Edit Offerts |
| `DELETE` | `/:offers_id/delete` | Delete Offerts |



  POST /api/post/     


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/create` | Create Post |
| `DELETE` | `/:post_id/delete` | Delete post  |




  SUBSCRIPTIONS /api/subscriptions/     


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Subscriptions |
| `POST` | `/create` | Create Subscription |
| `DELETE` | `/:subscription_id/delete` | Cancel Subscription |




--------- CLIENT --------------------------


  HOME    

| Type     | Description                
| :------- | :------------------------- 
| `/` | Home |  
```


  EVENTS

| Type     | Description                |
| :------- | :------------------------- |
| `/events` | Events  |             
| `/events/:event_id`' | Event details |        
| `/events/:event_id/pay` | Event payment/ subsc|   



  OFFERS

| Type     | Description                |
| :------- | :------------------------- |
| `/offers` | Offers   |         
| ` offers/:offert_id`' | Offert details |    




  PUBLISHERS

| Type     | Description                |
| :------- | :------------------------- |
| `/publishers` | Publishers|         
| `/publishers/apply` | Publishers|       


  COURSES

| Type     | Description                |
| :------- | :------------------------- |
| `/courses` | Courses|         
| `/courses/apply` | Courses|       
| `/courses/:course_id/pay` | course payment| 


  PROFILE


| Type     | Description                |
| :------- | :------------------------- |
| `/my-profile/:user_id` | User's profile |        
| `/admin/:user_id` | Admin  profile |         
| `/publisher-profile/:user_id` | Publishers profile |     


##### COMPONENTES #####


   
│----NAVBAR 
│----FOOTER
| 
└───HOME
│   │   INFO
│   │   REGISTER 
│   │   EVENTS CARD 
│   
│─── EVENTS 
│       │  EVENT CARD 
│       |  EVENT DETAILS 
│   
│─── OFFERS
│     │  OFFER CARD LIST 
│     |  OFFER DETAIL 
│   
│─── PUBLISHERS
|     |   PUBLISHER CARD
|
│─── COURSES
|     |   COURSES CARD
|     |   COURSES DETAIL
|
│─── PROFIILES
|     |   PROFILE CARD 
|     |   MATCHES CARDS
|     |   COURSES CARDS
|     |   EVNTS CARDS
|
│─── COMMENTS
|     |   COMMENTS CARD 
|
│─── PAYMENT
|     |   CART 
|     |   SUBSCRIPTION CARD
|     |   TICKECT CARD
│----





### MODELS #####


User Model

  name: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio'],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El email es obligatorio',
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  profileImg: { 
    type: String, 
    default: 'https://i.stack.imgur.com/l60Hf.png' 
    },

  description: {
    type: String,
    required: true, 
  },
  ocupacion: {
      type : string
      enum: [Digital, Education, Marketing, Events, Diseño, Fotografia,otros ]
  }

  role: {
    type: String, 
    enum: ['USER', 'ADMIN', 'PUBLISHER'], 
    default: 'USER'}
    
  match :  [
           {
               type: Schema.Types.ObjectId,
               ref:"user",
           },
       ], 

  publisher :  [
           {
               type: Schema.Types.ObjectId,
               ref:"publisher",
           },
       ],  

  eventAssitance :  [
           {
               type: Schema.Types.ObjectId,
               ref:"event",
           },
       ],   

   coursesAssitance :  [
           {
               type: Schema.Types.ObjectId,
               ref:"course",
           },
       ],              
}




Publisher Model 

 name: {
    type: String,
    required: [true, 'El nombre de la compañia es obligatorio'],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El email es obligatorio',
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  profileImg: { 
    type: String, 
    default: 'https://i.stack.imgur.com/l60Hf.png' 
    },

  description: {
    type: String,
    required: true, 
    trim: true
  },

  representative:  {
               type: Schema.Types.ObjectId,
               ref:"user",
           },

  


Event Model

  name: {   
    type: String,
    required: [true, 'El nombre de evento es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria',
  },
  date: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  img: { 
    type: String, 
    default: 'https://i.stack.imgur.com/l60Hf.png' 
    },
  location: {
        type: String
      },
        
   attendants:  [
           {
               type: Schema.Types.ObjectId,
               ref:"user",
           },
       ], 
    

    representative:  {
               type: Schema.Types.ObjectId,
               ref:"user",
        },



Offert Model  

  OfferName: {   
    type: String,
    required: [true, 'El nombre de evento es obligatorio'],
  },
  Company : {   
    type: String,
    required: true,
  },
  CompanyLogo : {   
    type: String,
    default: 'https://i.stack.imgur.com/l60Hf.png' 
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria',
  }
  writer: {
            type: Schema.Types.ObjectId,
            ref:"user",
  },

   


Post Model      
    writer : {
         type: Schema.Types.ObjectId,
        ref:"user",
    },
    receiver: {
         type: Schema.Types.ObjectId,
        ref:"user",
    }
    comment: {
        type: string,
        requiered: true,
        maxLength: 140,
    }



Course Model  

  name: {   
    type: String,
    required: [true, 'El nombre del curso es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria',
  },
  date: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  img: { 
    type: String, 
    default: 'https://i.stack.imgur.com/l60Hf.png' 
    },
  location: {
        type: String
      },
  Price: {
        type: String
      },       
   attendants:  [
           {
               type: Schema.Types.ObjectId,
               ref:"user",
           },
       ], 
    
   comments:  {
               type: Schema.Types.ObjectId,
               ref:"comment",
        },




Subscription Model 
  {
    publisher: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    totalPrice: {
      type: Number
    },
    Year: {
      type: Number
    },
  }




Payment Model 

user: {
	type: Schema.Types.ObjectId,
	ref: 'User',
	},
    
order: {
          type: Schema.Types.ObjectId,
          ref:"event",
 	},		

		paymentMethod: {
			type: String,
			required: true,
		},

		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},

		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		
		},
},		
		




