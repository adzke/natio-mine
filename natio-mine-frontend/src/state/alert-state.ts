import { makeVar } from "@apollo/client";
import { AlertProp } from "./alert-types";


export const rvShowAlert = makeVar<boolean>(false)
export const rvAlertProps = makeVar<AlertProp | undefined>(undefined)
