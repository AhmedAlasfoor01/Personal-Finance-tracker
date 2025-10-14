#Personal-Finance-Tracker

//USER
//ObjectId | _id | PK | Primary Key
//String | username | Unique username
//String | email | Login email
//String | password | Hashed password

//Relationships:
//"One user has many accounts"
//"One user has many transactions"

//ACCOUNT
//ObjectId | _id | PK | Primary Key
//ObjectId | userId | FK | Foreign Key to User
//String | accountName | Account display name
//String | accountType | checking/savings/credit/cash
//Number | balance | Current account balance
//String | accountNumber | Last 4 digits (optional)

//Relationships:
//"One account has many transactions"


//TRANSACTION
//ObjectId | _id | PK | Primary Key
//ObjectId | userId | FK | Foreign Key to User
//ObjectId | accountId | FK | Foreign Key to Account
//Number | amount | Transaction amount
//String | category | Expense/Income category
//String | description | Transaction details
//Date | transactionDate | When transaction occurred
 

//As a user, I should be able to sign up with username, email, and password.
//As a user, I should be able to log in to my account.
//As a user, I should be able to log out of my account.
//As a user, I should be able to create a new account.
//As a user, I should be able to view all my accounts.
//As a user, I should be able to edit an account.
//As a user, I should be able to delete an account.
//As a user, I should be able to create a new transaction.
//As a user, I should be able to view all my transactions.
//As a user, I should be able to edit a transaction.
//As a user, I should be able to delete a transaction.
//As a user, I should only see my own data.




//pseudocode



//Sign Up: The user provides username, email, and password. Check if username exists in database. 

//Hash the password using bcrypt. 

// The user provides email and password. 

//Find user by email in database.

 //Compare provided password with hashed password. 


// The account has name, type, balance, and number which will help us create it and ask exactly what the user needs to add so they can create the account.

//The account has index, create form, create, edit, update, and delete routes.

//View all accounts, Verify user is authenticated. Find all accounts where userId matches authenticated user. Return list of accounts.

//Create Form Display form asking for account name, type, balance, and number.

//Create Account Verify user is authenticated. Get account name, type, balance, and number from form. Validate input fields. Create new account object with userId. Save account to database. Return created account.

//Edit Form Verify user is authenticated. Find account by ID. Verify account belongs to user. Display form with current account data.

//Update Account Verify user is authenticated. Find account by ID. Verify account belongs to user. Get updated data from form. Update account with new data. Save to database. Return updated account.

//Delete Account Verify user is authenticated. Find account by ID. Verify account belongs to user. Delete all transactions associated with account. Delete account from database. Return success message.


// The transaction has category, amount, details, and date which will help us create it and ask exactly what the user needs to add so they can create the transaction.

//The transaction has index, create form, create, edit, update, and delete routes.


//Create Form Display form asking for account, category, amount, details, and date.

//Create Transaction  Verify user is authenticated. Get accountId, category, amount, details, and date from form. Validate input fields. Find account by ID. Verify account belongs to user. Create new transaction object with userId and accountId. Save transaction to database. Update account balance by adding amount. Return created transaction.

//Edit Form Verify user is authenticated. Find transaction by ID. Verify transaction belongs to user. Display form with current transaction data.

//Update Transaction Verify user is authenticated. Find transaction by ID. Verify transaction belongs to user. Get updated data from form. Store old amount. Update transaction with new data. Save to database. Calculate difference between new and old amount. Update account balance. Return updated transaction.

//Delete Transaction Verify user is authenticated. Find transaction by ID. Verify transaction belongs to user. Store transaction amount. Find associated account. Update account balance by subtracting amount. Delete transaction from database. Return success message.

//Technologies Used
//Backend: Node.js, Express.js
//Database: MongoDB with Mongoose ODM
//Template Engine: EJS (Embedded JavaScript)
//Authentication: express-session, bcrypt
//Styling: Custom CSS

//Future Enhancements
//Dashboard with financial overview and charts
//Budget limits and spending alerts
//Export transactions to CSV
//Recurring transactions for bills and salary
//Mobile responsive design

//The Name of the Project: Your Finance hub