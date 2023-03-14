import { LockClosedIcon} from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPage, setShowPage] = useState(true);
  const navigate = useNavigate();

  function cadastro(e) {
    e.preventDefault();
    localStorage.setItem("name", e.target[1].value);
    localStorage.setItem("email", e.target[2].value);
    localStorage.setItem("password", e.target[3].value);
    navigate("/board");
  }

  function login() {
        navigate("/board")
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-5 lg:px-7">
        <div className="w-full max-w-md space-y-9">
          <div>
            <img
              className="mx-auto h-11 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/2089/2089795.png"
              alt="Your Company"
            />
            <h2 className="mt-7 text-center text-4xl font-bold tracking-tight text-black-700">
              { "Login" }
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={showPage ? login : cadastro}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {!showPage ? (
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-400 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
              ) : null}

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-400 focus:outline-none focus:ring-slate-400 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-400 focus:outline-none focus:ring-slate-400 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-slate-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  onClick={() => setShowPage(!showPage)}
                  href="#"
                  className="font-medium text-slate-900 hover:text-indigo-500"
                >
                  {showPage
                    ? "Não tem Login? Cadastre-se"
                    : "Já tem cadastro? Faça Login"}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-solid bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {showPage ? "Sing In" : "Sing Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
