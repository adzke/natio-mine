import { makeVar } from "@apollo/client";
import { Experience } from "./profile-types";

export const rvCurrentExperience = makeVar<Experience | undefined>(undefined)
export const rvOperationInProgress = makeVar<boolean>(false)