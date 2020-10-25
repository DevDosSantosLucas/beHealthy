import SignIn from "../pages/SignIn";

interface Response{
    token: string;
    user:{
        name: string;
        email: string;
        kilograms: number;
    };
}

export  function signIn(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'dbsajkdnuiajbkcjkcjkacbkjuhdjkhfkdnakl',
                user:{
                    name: 'Lucas',
                    // name: SignIn,
                    email: 'ls@email.com',
                    kilograms: 80.0,
                },
            });
        },3000);
    });
}