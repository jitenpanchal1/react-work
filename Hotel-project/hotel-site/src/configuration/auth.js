import React from "react";
import { Client, Account, ID, Databases } from "appwrite";
import Urls from "../urls/Collection-urls";

export class Authentication {
  client = new Client();
  database;

  constructor() {
    this.client.setEndpoint(Urls.appwriteurl).setProject(Urls.projectid);
    this.database = new Databases(this.client);
  }

  async creatacount({ name, phone, date, time, people }) {
    try {
      return await this.database.createDocument(
        Urls.databaseid,
        Urls.reservationcollection,
        ID.unique(),
        {
          name,
          phone,
          date,
          time,
          people,
          wish,
        }
      );
    } catch (error) {
      console.log(error, "erorr at creatdocument");
    }
  }

  async getcurrentacount() {
    try {
      return await this.acount.get();
    } catch (error) {
      console.log(error, "error at get acount");
    }
  }
}

const authentication = new Authentication();

export default authentication;
