import Footer from "./footer";
import Header from "./header";

export default function Layout( {children}) {
    return (
        <>
            <Header/>
            <h2>레이아웃 입니다.</h2>
            <div>{children}</div>
            <Footer/>
        </>
    );
}