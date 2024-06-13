
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  import { bootstrapApplication } from '@angular/platform-browser';
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';
  
  
  
  const loginForm = document.getElementById("login-form") as HTMLFormElement | null;
  const loginButton = document.getElementById("login-form-submit") as HTMLButtonElement | null;
  const loginErrorMsg = document.getElementById("login-error-msg") as HTMLElement | null;
  
  if (loginForm && loginButton && loginErrorMsg) {
      loginButton.addEventListener("click", (e: MouseEvent) => {
          e.preventDefault();
          const usernameInput = loginForm.elements.namedItem("username") as HTMLInputElement | null;
          const passwordInput = loginForm.elements.namedItem("password") as HTMLInputElement | null;
  
          if (usernameInput && passwordInput) {
              const username = usernameInput.value;
              const password = passwordInput.value;
  
              if (username === "user" && password === "web_dev") {
                  alert("You have successfully logged in.");
                  location.reload();
              } else {
                  loginErrorMsg.style.opacity = "1";
              }
          }
      });
  } else {
      console.error("One or more required elements not found.");
  }
  