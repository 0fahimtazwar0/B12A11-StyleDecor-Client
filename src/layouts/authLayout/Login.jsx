import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.password) {
      errs.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      await loginUser(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setServerError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setServerError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setServerError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-credential":
        return "Invalid email or password.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/popup-closed-by-user":
        return "Google sign-in was cancelled.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  return (
    <div className='flex flex-col md:flex-row w-fit items-center justify-center gap-10 absolute inset-0 max-width'>
      <div>
        <h2 className='text-4xl md:text-5xl font-bold text-primary'>
          Login Now!
        </h2>
        <p className='mt-2.5'>
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className='link link-primary'>
            Register
          </Link>
        </p>
      </div>

      <form
        className='fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-4'
        onSubmit={handleLogin}
        noValidate
      >
        <legend className='fieldset-legend'>Login</legend>

        {serverError && (
          <div className='text-error text-sm mb-2 bg-error/10 px-3 py-2 rounded'>
            {serverError}
          </div>
        )}

        <label className='label'>Email</label>
        <input
          type='email'
          name='email'
          className={`input w-full ${errors.email ? "input-error" : ""}`}
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className='text-error text-xs mt-0.5'>{errors.email}</span>
        )}

        <label className='label mt-2'>Password</label>
        <input
          type='password'
          name='password'
          className={`input w-full ${errors.password ? "input-error" : ""}`}
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className='text-error text-xs mt-0.5'>{errors.password}</span>
        )}

        <button
          type='submit'
          className='btn btn-neutral mt-4 w-full'
          disabled={loading}
        >
          {loading ? (
            <span className='loading loading-spinner loading-sm'></span>
          ) : (
            "Login"
          )}
        </button>

        <div className='divider'>OR</div>

        <button
          type='button'
          className='btn bg-white text-black border-[#e5e5e5] w-full'
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg
            aria-label='Google logo'
            width='16'
            height='16'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <g>
              <path d='m0 0H512V512H0' fill='#fff'></path>
              <path
                fill='#34a853'
                d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
              ></path>
              <path
                fill='#4285f4'
                d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
              ></path>
              <path
                fill='#fbbc02'
                d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
              ></path>
              <path
                fill='#ea4335'
                d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
