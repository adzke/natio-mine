import { makeVar } from "@apollo/client";
import { AuthorisedUser } from "./login-types";


export const rvAuthorisedUser = makeVar<AuthorisedUser | undefined>(undefined)
