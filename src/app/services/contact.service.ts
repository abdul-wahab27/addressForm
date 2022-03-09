import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http.get("http://localhost:3000/get/contacts");
  }
  createContacts(name: any, address: any, phone: any) {
    return this.http.post("http://localhost:3000/create/contact", {
      name: name,
      phone: phone,
      address: address,
    });
  }
  updateContacts(id: any, name: any, address: any, phone: any) {
    return this.http.put("http://localhost:3000/update/contact/" + id, {
      name: name,
      address: address,
      phone: phone,
    });
  }
}
