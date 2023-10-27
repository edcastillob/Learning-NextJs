import { NextResponse } from "next/server"

export async function GET(request, {params}){

    // ---------uso de searchParams------------
    // http://localhost:3000/api/users/1?name=edwar&lastname=castillo
    // const { searchParams } = new URL(request.url)
    // console.log(searchParams)
    // const name= searchParams.get('name')
    // const lastname= searchParams.get('lastname')
    // console.log(`the full name is ${name} ${lastname}`)


    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await resp.json()
    
    return NextResponse.json(data)  
}