import dynamic from "next/dynamic";
import "./globals.css";
const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });

export const metadata = {
	title: "EJ Law",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
