import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>("dark");

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

      
  }

  // useEffect(() => {
  //   console.log('', Date.now())
  // })

  // useEffect(() => {
  //   console.log('UseEffect com array deps vazio', Date.now())
  // }, []) // Executa apenas quando o react monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log('theme mudou', theme, Date.now())
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log('Este componente será atualizado')
    }
  }, [theme]) // Executa apenas quando o valor de theme Muda
  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a home"
        title="Ir para a home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Ir para página de Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema escuro/claro"
        title="Mudar Tema Escuro/Claro"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
