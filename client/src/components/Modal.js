class Modal {
  constructor() {
    this._modalmodal = document.querySelector("#modal");

    this._modalBtn = document.querySelector("#modal-btn");

    this.addEventListeners();
  }

  addEventListeners() {
    this._modalBtn.addEventListener("click", this.open.bind(this));

    window.addEventListener("click", this.ousideClick.bind(this));
  }

  open() {
    this._modal.style.display = "block";
  }

  close() {
    this._modal.style.display = "none";
  }

  outside(e) {
    if (e.target === this._modal) {
      this.close();
    }
  }
}

export default Modal;
