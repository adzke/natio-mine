import { rvAuthorisedUser, rvUserAuthenticated } from "../state/login-state";
import { AuthorisationToken, AuthorisedUser } from "../state/login-types";
import { rvAlertProps, rvShowAlert } from "../state/alert-state"
import { rvProfile } from "../state/profile-state";
import { Profile } from "../state/profile-types";
import { AlertTypes } from "../state/alert-types";

const loginAPI = 'http://127.0.0.1:8000/api/auth/login'
const gainExperienceAPI = 'http://127.0.0.1:8000/experience/'
const getProfileAPI = 'http://127.0.0.1:8000/experience/retrieve_profile/'
export const getAuthToken = async (username: string, password: string) => {

    const userObject = {
        username: username,
        password: password
    }


    try {

        // 👇️ const response: Response
        const response = await fetch(loginAPI, {
            method: 'POST',
            body: JSON.stringify(userObject),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: CreateUserResponse
        const result = (await response.json()) as AuthorisedUser;
        rvAuthorisedUser(result)
        rvUserAuthenticated(true)
        return {
            errorMessage: undefined,
            postSucessful: true,
            authorisedUser: result
        }
    }
    catch (error) {
        if (error instanceof Error) {

            console.log('error message: ', error.message);
            rvShowAlert(true)
            rvAlertProps({alertMessage: error.message, alertType: AlertTypes.Error})
            return {
                errorMessage: error.message,
                postSucessful: false,
                authorisedUser: undefined
            }

        } else {

            console.log('unexpected error: ', error);
            return {
                errorMessage: 'An unexpected error occurred',
                postSucessful: false,
                authorisedUser: undefined
            }

        }


    }

}

export const gainExperience = async (jwtToken: AuthorisationToken) => {

    const userObject = {
        
    }

    try {

        // 👇️ const response: Response
        const response = await fetch(gainExperienceAPI, {
            method: 'POST',
            body: JSON.stringify(userObject),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `token ${jwtToken}`
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: CreateUserResponse
        const result = (await response.json()) as Profile;
        rvProfile(result)
        return result
    }
    catch (error) {
        if (error instanceof Error) {

            console.log('error message: ', error.message);
            rvShowAlert(true)
            rvAlertProps({alertMessage: error.message, alertType: AlertTypes.Error})
            return {
                errorMessage: error.message,
                postSucessful: false
            }

        } else {

            console.log('unexpected error: ', error);
            return {
                errorMessage: 'An unexpected error occurred',
                postSucessful: false
            }

        }


    }

}

export const getProfile = async (jwtToken: AuthorisationToken) => {


    try {

        // 👇️ const response: Response
        const response = await fetch(getProfileAPI, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `token ${jwtToken}`
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: CreateUserResponse
        const result = (await response.json()) as Profile;
        rvProfile(result)
        return result
    }
    catch (error) {
        if (error instanceof Error) {

            console.log('error message: ', error.message);
            rvShowAlert(true)
            rvAlertProps({alertMessage: error.message, alertType: AlertTypes.Error})
            return {
                errorMessage: error.message,
                postSucessful: false
            }

        } else {

            console.log('unexpected error: ', error);
            return {
                errorMessage: 'An unexpected error occurred',
                postSucessful: false
            }

        }


    }

}