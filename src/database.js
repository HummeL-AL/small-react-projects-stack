import { ref, set, onValue } from "firebase/database";
import { database } from "./configs/firebase_config";

export function AddQuiz(quiz, id) {
  const quizesRef = ref(database, "quizes/" + id);
  set(quizesRef, quiz);
}

export function GetAllQuizes() {
  const quizesRef = ref(database, "quizes");
  onValue(quizesRef, (snapshot) => {
    const data = snapshot.val();
    console.log("GetAllQuizes: ", data);
  });
}

export function GetQuiz(id) {
  const quizesRef = ref(database, "quizes/" + id);
  onValue(quizesRef, (snapshot) => {
    const data = snapshot.val();
    console.log("GetQuiz", `(${id}): `, data);
  });
}
