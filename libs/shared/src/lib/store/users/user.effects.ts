import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserAction from './user.actions';
import {  map, mergeMap } from 'rxjs';
import { SharedApiService } from '../../services/api.service';

@Injectable()
export class UserEffect {
  constructor(private actions: Actions, private sharedApiService: SharedApiService) {}

  getRelatedProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserAction.getUsers),
      mergeMap((action) => {
        return this.sharedApiService.getUsers(action.userInput).pipe(
          map((users) => {
            return UserAction.getUsersSuccess({ users: users });
          })
          // catchError((error) => of(ProductAction.getRelatedProductsFailure({ error: error.message })))
        );
      })
    )
  );
}
