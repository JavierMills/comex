import { Usuario } from "./InfoUsuarios";
import { Menu } from "./Menu";
import { Niveles } from "./Niveles";

export interface DatosUsuario{
    usuario:                    Usuario,
    perfilSeleccionado:         Niveles,
    menus:                      Menu[],
}