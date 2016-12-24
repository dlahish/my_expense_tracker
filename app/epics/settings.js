import Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
import { SYNC_DATA } from '../constants'
import { updateSyncedTransactions, changeSyncStatus } from '../actions/settings'
import { updateCollection } from '../api/data'
import { getTransactions } from '../actions/data'
import { forcedNewProps } from '../actions/categories'

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
    .map(() => Observable.of(prepareDataForServer(store.getState())))
    .mergeMap((x) => updateCollection(x.value, store.getState().account.token))
    .map(res => res.data.transactions)
    .flatMap(t =>
      Observable.concat(
        Observable.of(updateSyncedTransactions(t)),
        Observable.of(changeSyncStatus(true)),
        Observable.of(getTransactions('2016', store.getState().account.token)),
        Observable.of(forcedNewProps())
      )
    )
    .catch(x => Observable.of(x)
      .flatMap(() => Observable.of(changeSyncStatus(false))))
}
