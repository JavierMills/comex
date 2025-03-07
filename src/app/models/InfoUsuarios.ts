export interface Usuario{
    id:             number;
    dscExp:         string;
    dscNombre:      string;
    dscRecibirC:    number;
    dscCorreo:      string;
    valPerfil:      number;
    valExtension:   string;
    accesos:        Acceso[];
}

export interface Acceso{
    valEstatus:         number;
    fchAlta:            null;
    valAutorizo:        number;
    idAplicativoFk:     number;
    idNivelAcceso:      number;
}