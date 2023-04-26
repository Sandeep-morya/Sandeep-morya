import React, { useContext } from "react";

export const NavbarContext = React.createContext(
	{} as {
		linkname: LinkName;
		setLinkName: React.Dispatch<React.SetStateAction<LinkName>>;
	},
);

export const useNavLink = () =>{
	return useContext(NavbarContext)
}

type LinkName = "" | "about" | "skills" | "projects" | "contact" | "resume";

const NavbarStateProvider = ({ children }: { children: React.ReactNode }) => {
	const [linkname, setLinkName] = React.useState<LinkName>("");
	return (
		<NavbarContext.Provider value={{ linkname, setLinkName }}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarStateProvider;
