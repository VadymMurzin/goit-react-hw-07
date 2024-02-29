import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBar from "./SearchBar/SearchBar";
import css from "./app.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}