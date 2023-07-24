import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata: Metadata = {
	title: "Campbnb",
	description:
		"Find the perfect place to camp at an amazing price. Go outdoors with Campbnb!",
};

const font = Manrope({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
