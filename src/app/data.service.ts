import { inject, Injectable } from "@angular/core"
import { Firestore } from "@angular/fire/firestore";
import { collection, getDocs } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})


export class DataService {

    users: any[] = [];
    products: any[] = [];
    firestore = inject(Firestore);

    constructor() {}

    async loadUsers(coll:string) {
        const usersRef = collection(this.firestore, coll)
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map(snap => {
            return {
                id: snap.id,
                ...snap.data(),
            }
        })
        this.users = users;
        console.log(users);
        
    }


}