const user ={
    email : " tes",
    phone : "jdrlfkjefr" 
}

export function ValidateEmail(email){
     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return pattern.test(email.trim());
}

export function ValidatePhone(phone){
    const pattern = /^[6-9]\d{9}$/;
    return pattern.test(phone.trim());
}

console.log(ValidateEmail(user.email));
console.log(ValidatePhone(user.phone));

