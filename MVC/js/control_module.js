const controlModule = (function (view, data) {
  function setUpEventListeners() {
    const $createMovie = document.querySelector("#createMovie");
    const $createProgram = document.querySelector("#createProgram");
    $createProgram.addEventListener("click", onCreateProgram);
    $createMovie.addEventListener("click", onMovieCreate);
    view.movieToAdd.addEventListener("click", addMov);
  }

  const onMovieCreate = function () {
    view.resetError(view.errDisplay);
    const getForm = view.getForm();
    try {
      view.validateFormData(getForm);
    } catch (error) {
      view.printError(view.errDisplay, error.message);
      return;
    }
    data.createMovie(getForm);
    view.printCreatedMovieList(data.getPrintData());
    view.showOptionMovies(data.getPrintData());
    view.resetForm();
  };

  const onCreateProgram = function () {
    const dateValue = view.programDate.value;
    data.createProgram(new Date(dateValue));
    view.printCreatedProgramList(data.getPrintDataProgram());
    view.showOptionProgram(data.getPrintDataProgram());
    view.resetForm();
  };

  const addMov = function () {
    view.resetError(view.errorDisplayProgram);
    const getForm = view.getFormForAddMovie();
    try {
      view.validateFormData(getForm);
      data.checkProgram(getForm.program).addMovie(data.checkMovie(getForm.movie));
    } catch (error) {
      view.printError(view.errorDisplayProgram, error.message);
    }

    view.printCreatedProgramList(data.getPrintDataProgram());
  };

  return {
    init: function () {
      console.log("App initialized!!!");
      setUpEventListeners();
    },
  };
})(viewModule, dataModule);
