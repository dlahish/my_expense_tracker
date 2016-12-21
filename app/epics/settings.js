import Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
import {
  SYNC_DATA
} from '../constants'
import { failedSync, updateSyncedTransactions } from '../actions/settings'
import { updateCollection } from '../api/data'

function prepareDataForServer(state) {
  const token = state.account.token,
        transactions = state.transactions.transactions
        console.log('transactions', transactions)
  console.log('prepareDataForServer ----', transactions)
  let dataToServer = []
  transactions.forEach((d) => {
    let transaction = {
      date: d.date,
      category: d.category,
      amount: d.amount,
      notes: d.notes,
      type: d.type
    }
    dataToServer.push(transaction)
  })
  return dataToServer
}

export default function settings(action$, store) {
  const state = store.getState()
  const token = state.account.token
  return action$.ofType(SYNC_DATA)
    .delay(2000)
    .mapTo(prepareDataForServer(store.getState()))
    .mergeMap(x => Rx.Observable.fromPromise(updateCollection(x, token))
      .do((x) => console.log('data to server ', x))
      .map(res => res.data.transactions)
      .map(updateSyncedTransactions)
      .catch(failedSync))



    // .takeUntil(Rx.Observable.of({type : 'FAILED'}))
}
