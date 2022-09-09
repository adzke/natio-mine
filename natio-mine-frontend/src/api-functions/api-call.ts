import { rvAuthorisedUser, rvUserAuthenticated } from "../state/login-state";
import { AuthorisedUser } from "../state/login-types";
import { rvShowAlert } from "../state/alert-state"
import { rvAlertText } from "../state/alert-state";

const loginAPI = 'http://127.0.0.1:8000/api/auth/login'


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
        return result
    }
    catch (error) {
        if (error instanceof Error) {

            console.log('error message: ', error.message);
            rvShowAlert(true)
            rvAlertText(error.message)
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