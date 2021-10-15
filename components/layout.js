import Nav from "./nav";
import Footer from "./footer";
import {GlobalContext} from "../pages/_app";
import {useContext} from "react";

export default function Layout({children, seo}) {
    const { global, menu} = useContext(GlobalContext);
    return (
        <div className="font-gotham-rounded">
            <Nav menu={menu.main} global={global}/>
            <main className="text-primary">
                {children}
            </main>
            <Footer menu={menu.footer} global={global} />
        </div>
    );
}



