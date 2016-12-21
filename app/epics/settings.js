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
  return action$.ofType(SYNC_DATA)
    .map(() => Rx.Observable.of(prepareDataForServer(store.getState())))
    .mergeMap((x) => Rx.Observable.fromPromise(updateCollection(x.value, store.getState().account.token)))
    .map(t => updateSyncedTransactions(t.data.transactions))
    .catch(x => Rx.Observable.of(x)
      .map(failedSync))
}
