"use server";

import { setCookies } from "./cookies";
import PocketBase, { RecordModel, RecordService } from 'pocketbase';
import db from "../lib/pocketbase";


const users = db.collection("users");
const guests = db.collection("guests");

export async function createUser(username: string, email: string, password: string, passwordConfirm: string) {
  if (password != passwordConfirm) {
    return
  }

  await users.create({
    "username": username,
    "email": email,
    "emailVisibility": false,
    "password": password,
    "passwordConfirm": passwordConfirm
  });
  setCookies(email)
}

export async function signIn(email: string, password: string) {
  await users.authWithPassword(
    email,
    password
  );
  
  setCookies(email)

  //users.requestVerification(email);
  console.log(db.authStore.isValid);
  console.log(db.authStore.token);
  console.log(db.authStore.model?.id);
}

export async function createGuest(username: string, email: string, password: string, passwordConfirm: string) {
  if (password != passwordConfirm) {
    return
  }

  await guests.create({
    "username": username,
    "email": email,
    "emailVisibility": false,
    "password": password,
    "passwordConfirm": passwordConfirm
  });
  setCookies(email)
}
