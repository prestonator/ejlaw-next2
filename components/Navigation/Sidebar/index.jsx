import {
	SheetTrigger,
	SheetContent,
	Sheet,
	SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import {
	AccordionTrigger,
	AccordionContent,
	AccordionItem,
	Accordion,
} from "@/components/ui/accordion";

const Sidebar = ({ navItems }) => {
	return (
		<div>
			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent side="left" className="flex flex-col">
					<Link href="/">
                        <Image src="/logo.webp" alt="logo" width={120} height={60} />
                    </Link>
					{navItems.map((item, index) => {
						if (item.title === "Logo") {
							return null;
						}
						if (item.subMenus) {
							return <SidebarSubmenu key={index} item={item} />;
						}
						return <SidebarItem key={index} item={item} />;
					})}
				</SheetContent>
			</Sheet>
		</div>
	);
};

const SidebarItem = ({ item }) => {
	return (
		<SheetClose asChild>
			<Link href={item.path}>{item.title}</Link>
		</SheetClose>
	);
};

const SidebarSubmenu = ({ item }) => {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value={item.title}>
				<AccordionTrigger className="flex w-full">
					{item.title}
				</AccordionTrigger>
				{item.subMenus.map((sub, index) => {
					const href =
						item.title === "Our Team" ? `/our-team${sub.path}` : sub.path;
					return (
						<AccordionContent key={index} className="flex flex-col">
							<SheetClose asChild>
								<Link href={href} className="w-full">
									{sub.title}
								</Link>
							</SheetClose>
						</AccordionContent>
					);
				})}
			</AccordionItem>
		</Accordion>
	);
};

export default Sidebar;
