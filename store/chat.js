import firebase from "~/plugins/firebase"
import { firestoreAction } from "vuexfire"

const db = firebase.firestore()
const contentsRef = db.collection('contents')

export const state = () => ({
    contents: []
})

export const actions = {
    init: firestoreAction(({bindFirestoreRef}) => {
        bindFirestoreRef('contents', contentsRef)
    }),
    add: firestoreAction((context, [name, message]) => {
        if(name.trim() && message.trim()) {
            contentsRef.add({
                name: name,
                message: message,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    remove: firestoreAction((context, id) => {
        contentsRef.doc(id).delete()
    })
}

export const getters = {
    orderedContents: state => {
        return _.sortBy(state.contents, 'created')
    }
}