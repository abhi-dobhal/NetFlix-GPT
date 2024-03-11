//we will make use of regex to validate our email and password and name
//regex->regular expression pattern

export const CheckValidateData =(email,password,name)=>{
     //taking help of regex for email validation and using test function on regex
    const isEmailValid= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
const isPasswordValid =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
//const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

if(!isEmailValid) return "Email is not valid!!!"
if(!isPasswordValid) return "Password invalid"
//if(!isNameValid) return "Name is invalid"
return null;
}