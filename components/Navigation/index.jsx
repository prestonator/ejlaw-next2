import Sidebar from "./Sidebar";

const menus = [
	{ title: "Home", path: "/home" },
	{
		title: "Our Team",
		path: "/our-team",
		subMenus: [
			{ title: "Elton Jenkins", path: "/elton-jenkins" },
			{ title: "Eric Kroier", path: "/eric-kroier" },
		],
	},
	{
		title: "Practice Areas",
		path: "",
		subMenus: [
			{ title: "Criminal Defense", path: "/criminal-defense" },
			{ title: "Family Law", path: "/family-law" },
			{ title: "Personal Injury", path: "/personal-injury" },
		],
	},
	{ title: "About", path: "/about" },
	{ title: "Logo", path: "/logo" },
	{ title: "Blog", path: "/blog" },
	{ title: "In The News", path: "/in-the-news" },
	{ title: "MyCase", path: "/mycase" },
	{ title: "Contact", path: "/contact" },
];

const Navigation = () => {
	return (
		<Sidebar navItems={menus} />
	);
};

export default Navigation;
