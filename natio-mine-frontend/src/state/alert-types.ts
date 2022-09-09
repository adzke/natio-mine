export enum AlertTypes {
    Error = "error",
    Warning = "warning",
    Info = "info",
    Success = 'success',
}


export type AlertProp = {
    alertMessage: string,
    alertType?: AlertTypes
}
