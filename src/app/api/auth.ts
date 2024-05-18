"use server";

import { setCookies } from "./cookies";
import PocketBase from 'pocketbase';

const db = new PocketBase('http://127.0.0.1:8090');
const users = db.collection("users");

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