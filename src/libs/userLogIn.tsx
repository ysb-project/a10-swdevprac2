export default async function userLogIn(userEmail:string, userPassword:string) {
    
    const response = await fetch('https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        })
    });

    if(!response.ok){
        throw new Error("Failed to fetch Login")
    }

      const data = await response.json()
console.log("LOGIN RESPONSE:", JSON.stringify(data)) 
   return {
        id: data._id,     // ✅ เพิ่ม id ให้ตรงกับ next-auth User type
        _id: data._id,
        name: data.name,
        email: data.email,
        tel: data.tel,
        role: data.role,
        token: data.token
    }
}