import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";

export default function Main() {
  return (
    <main className="main">
      <Header />
      <NavBar />
      <div className="content"></div>
    </main>
  )
}
