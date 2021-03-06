import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-userhome",
  templateUrl: "./userhome.component.html",
  styleUrls: ["./userhome.component.css"]
})
export class UserhomeComponent implements OnInit {
  username: any = "";
  email: any = "";
  currentUser: any;

  // users: User[] = [];
  constructor(private _user: UserService, private _router: Router) {
    // this._user
    //   .user()
    //   .subscribe(
    //     data => this.addName(data),
    //     error => this._router.navigate(["/login"])
    //   );
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("currentUser", this.currentUser);
    this.username = this.currentUser.data[0].userName;
    this.email = this.currentUser.data[0].email;
  }

  // addName(data) {
  //   this.username = data.username;
  // }
  ngOnInit() {}

  logout() {
    this._user.logout();
    this._router.navigate(["/login"]);
  }
}
