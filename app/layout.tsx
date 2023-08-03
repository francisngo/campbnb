import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Navbar from "@/app/components/navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";
import LoginModal from "@/app/components/modals/LoginModal";
import RentModal from "@/app/components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientComponent from "@/app/components/ClientComponent";

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
					<SearchModal />
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
