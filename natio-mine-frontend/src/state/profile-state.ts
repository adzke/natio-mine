import { makeVar } from "@apollo/client";
import { Experience, Profile } from "./profile-types";

export const rvCurrentExperience = makeVar<Experience | undefined>(undefined)
export const rvOperationInProgress = makeVar<boolean>(false)
export const rvProfile = makeVar<Profile | undefined>(undefined)