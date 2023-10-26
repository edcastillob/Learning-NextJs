import { NextResponse } from 'next/server';

export async function GET(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    
    return NextResponse.json(data)
}
export async function POST(){
    return NextResponse.json({
        message: "Posteando Datos!"
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