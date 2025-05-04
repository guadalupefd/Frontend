import DiaryInput from "../components/DiaryInput.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
export default function Diary() {
  return (
    <DefaultLayout>
      <h1>Proceda a escribir su diario aqui!</h1>
      <DiaryInput/>
    </DefaultLayout>
  );
}
