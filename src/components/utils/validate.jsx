export const validData = (email, password, username) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isUsernameValid = /^[a-zA-Z0-9]+$/.test(username);


    if(!isEmailValid) return "❌ Please enter a valid email address"
    if(!isPasswordValid) return "⚠️ Your password must contain a uppercase, numeric & special character"
    // if(!isUsernameValid) return "👎 Your username is incorrect";


    return null;
}