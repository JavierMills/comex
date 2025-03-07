export interface Aplicativo{
    id:                     number,
    dscAlias:               string,
    dscAplicativo:          string,
    dscDescripcion:         string,
    valNivelAcc:            number;
    txtUrl:                 string,
    menus:                  Menu[]
}

export interface Menu{
    id:             number;
    dscImg:         string;
    dscNombre:      string;
    idNamMenu:      string;
    valEstado:      number;
    valGrupo:       number;
    valNivelAcc:    number;
    valOrden:       number;
    subMenu:        Submenu[];
    eventosMenu:    EventosMenu[]; 
}

export interface EventosMenu{
    id:              number;
    dscFuncion:       string;
    idMePertenFk:    number;
    valNivelMenu:    number;
    valTipoEven:     string;

}

export interface Submenu{
    id:             number;
    dscNombre:      string;
    idNameSubmenu:  string;
    valNivel:       number;
    eventosMenu:    EventosMenu[];
}
export interface DatosBuc{
    buc:            string,
    segmento:       string
}

