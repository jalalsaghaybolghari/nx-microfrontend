import { createAction, props } from '@ngrx/store';
import { User, UserInput } from '../../shared.model';

export const getUsers = createAction(`[Users] get users`, props<{ userInput: UserInput }>());
export const getUsersSuccess = createAction(`[Users] get users success`, props<{ users: User[] }>());
export const getUsersFailure = createAction(`[Users] get users failure`, props<{ error: string }>());
