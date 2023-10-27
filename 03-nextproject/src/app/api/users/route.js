import { NextResponse } from 'next/server';

export async function GET(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    
    return NextResponse.json(data)
}
export async function POST(request){
    const data = await request.json()
    const { name, lastname } = data;
    console.log(name)
    console.log(lastname)
    return NextResponse.json({
        message: "Datos recibidos!!",
        dates: `${name} ${lastname}`

    })
}
export async function PUT(){
    return NextResponse.json({
        message: "Editando Datos!"
    })
}
export async function DELETE(){
    return NextResponse.json({
        message: "Eliminando Datos!"
    })
}