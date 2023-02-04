import AuxiliarySidebar from "./AuxSidebar";
import MainMenu from "./MainMenu";
import Periphery from "./Periphery";
import style from "./styles/layout.module.scss";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Periphery />
      <section className={style.layout}>
        <MainMenu />
        <div className={style.agora}>{children}</div>
        {/* @ts-ignore */}
        <AuxiliarySidebar />
      </section>
    </>
  );
}
