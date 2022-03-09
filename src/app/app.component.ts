import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContactService } from "./services/contact.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "AddressForm";
  heading = "Address Form";
  isEditMode = false;
  selectedUser: any = {
    name: "",
    address: "",
    phone: "",
  };
  user: any = {
    name: "",
    address: "",
    phone: "",
  };
  users: any = [];

  save() {
    const { name, address, phone } = this.user;
    this.service.createContacts(name, address, phone).subscribe((res) => {
      console.log(res);
      alert("Successfully created");
      this.user = { name: "", phone: "", address: "" };
    });
  }

  onEdit(user: any) {
    this.selectedUser = user;
    this.isEditMode = true;
  }

  update(id: any) {
    this.service
      .updateContacts(
        this.selectedUser.id,
        this.selectedUser.name,
        this.selectedUser.address,
        this.selectedUser.phone
      )
      .subscribe((res) => {
        console.log(res);
        alert("Updated succesfully");
        this.user = { name: "", phone: "", address: "" };
      });
    //
  }
  cancel() {
    this.isEditMode = false;
    this.selectedUser = { name: "", phone: "", address: "" };
  }

  constructor(private service: ContactService) {
    this.service.getAllContacts().subscribe((contact: any) => {
      console.log("response", contact);
      this.users = contact.data;
    });
  }

  onDelete(index: any) {
    this.users.splice(index, 1);
  }
}
