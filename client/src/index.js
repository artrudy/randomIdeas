import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/ideaList";
import "./css/style.css";
import IdeaList from "./components/ideaList";

new Modal();

const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
