import { getFirestore, doc, getDoc } from "firebase/firestore";
export default async function getUserRole(userId, app) {

  if (!userId) {
    throw new Error("userId is null or undefined.");
  }
  const db = getFirestore(app);

  const studentDocRef = doc(db, "Student", userId);
  const studentDoc = await getDoc(studentDocRef);

  const instructorDocRef = doc(db, "Instructor", userId);
  const instructorDoc = await getDoc(instructorDocRef);

  const adminDocRef = doc(db, "Admin", userId);
  const adminDoc = await getDoc(adminDocRef);

  let role;

  if (studentDoc.exists()) {
    role = "Student";
  } else if (instructorDoc.exists()) {
    role = "Instructor";
  } else if (adminDoc.exists()) {
    role = "Admin";
  } else {
    throw new Error("User not found in any role collection.");
  }

  return role;
}