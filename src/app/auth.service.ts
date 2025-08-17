import { Injectable, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { DataService } from "./data.service";
import { BehaviorSubject } from "rxjs";
DataService

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    auth = inject(Auth)
    dataservice = inject(DataService);
    user: any;
    userID: string = '';

    private currentUser = new BehaviorSubject<any>(null);
    currentUser$ = this.currentUser.asObservable();
    constructor() { }


    async login() {
        const userMail = 'testuser@mail.de';
        const userPassword = 'Testuser12345';
        try {
            await signInWithEmailAndPassword(this.auth, userMail, userPassword);
            const user = this.auth.currentUser
            if (user) {
                await this.findCurrentUser(user.uid)
            }


        } catch (error) {
            console.error(error)
        }

    }

    async findCurrentUser(ID: string) {
        await this.dataservice.loadUsers('users');
        const users = this.dataservice.users;
        const user = users.find(user => user.id === ID);
        if (user) {
            this.user = user;
            this.currentUser.next(this.user);
        }

    }

}