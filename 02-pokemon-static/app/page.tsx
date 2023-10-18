import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";


export default function Home() {
	return (
		<>
				<Link
					isExternal
					as={NextLink}
					href="#"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
		</>
		

			
				
			
	
	);
}
