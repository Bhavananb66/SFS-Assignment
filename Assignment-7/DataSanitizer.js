const rawUser = {
    name:" Bhavana ",
    email:" bhanu@gmail.com",
    phone: " ",
    age: null,
    city: " mumbai "
};

function sanitizerUser(user){
    const cleaned = {};

    for(let key in user){
        const value = user[key];

        if(typeof value === "string"){
            const trimmed = value.trim();
            if(trimmed !== ""){
                cleaned[key] = trimmed;
            }
        }else if(value != null){
            cleaned[key] = value;
        }
    }

    if(cleaned.name){
        cleaned.name = cleaned.name.toLowerCase().replace(/\b\w/g,char=>char.toUpperCase());
    }
    return cleaned;
}

console.log(sanitizerUser(rawUser));