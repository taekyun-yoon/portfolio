import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: 
    Readonly<{ children: React.ReactNode }>) {
return (
    <>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>
);
}
