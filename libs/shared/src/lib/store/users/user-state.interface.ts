import { User } from "../../shared.model";

export interface UserStateInterface {
    isLoading: boolean,
    data: User[],
    error: string | null
}