import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: 
    Readonly<{ children: React.ReactNode }>) {
return (
    <>
        <section>
            <Header/> 
        </section>
        <div>{children}</div>
        <section>
            <Footer/>
        </section>
    </>
);
}
