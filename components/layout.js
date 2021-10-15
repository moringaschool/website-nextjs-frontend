import Nav from "./nav";
import Footer from "./footer";
export default function Layout ({children, menu, seo}) {
    return (
        <div className="font-gotham-rounded">
            <Nav menu={menu}/>
            <main className="text-primary">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

