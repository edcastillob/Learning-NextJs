import NextLink from "next/link";
import  Link  from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import RootLayout from "./layout";



export default function Home() {

	return (
		<RootLayout title="Listado de Pokemons">
				<Link
					
					
					href="#"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
		</RootLayout>			
	
	);
}
