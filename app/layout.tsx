import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientComponent from "./components/ClientComponent";

export const metadata: Metadata = {
	title: "Campbnb",
	description:
		"Find the perfect place to camp at an amazing price. Go outdoors with Campbnb!",
};

const font = Manrope({
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={font.className}>
				<ClientComponent>
					<ToasterProvider />
					<RentModal />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientComponent>
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	);
}
