# bank-transaction app

//How to use the app

    POST 
    /create-account
     Content-Type: application/json
     
     {
       "name": "John Doe",
       "amount": 5000
     }



     GET FOR A SPECIFIC ACCOUNT
     /balance/1234567890

     GET BALANCE FOR ALL ACCOUNTS
     /balance
 

     POST 
     /transfer
     Content-Type: application/json
     
     {
       "from": "1234567890",
       "to": "9876543210",
       "amount": 1000
     }
     
