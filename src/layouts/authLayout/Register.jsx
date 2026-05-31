import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const IMGBB_API_KEY = "01e9c3499868ecc525bc84946e77ffa7";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.password) {
      errs.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      errs.password = "Password must contain at least one uppercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      errs.password = "Password must contain at least one number.";
    }
    if (!formData.confirmPassword) {
      errs.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        photo: "Only JPG, PNG, GIF, or WEBP images are allowed.",
      }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: "Image must be under 5MB." }));
      return;
    }

    setPhotoFile(file);
    setErrors((prev) => ({ ...prev, photo: "" }));
    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const uploadToImgbb = async (file) => {
    if (!IMGBB_API_KEY) return null;
    const data = new FormData();
    data.append("image", file);
    setUploadingPhoto(true);
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: data,
        },
      );
      const json = await res.json();
      if (json.success) return json.data.url;
      throw new Error("Upload failed");
    } catch {
      throw new Error("Failed to upload photo. Please try again.");
    } finally {
      setUploadingPhoto(false);
    }
  };

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/weak-password":
        return "Password is too weak.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setServerError("");
    try {
      let photoURL = null;
      if (photoFile) {
        try {
          photoURL = await uploadToImgbb(photoFile);
        } catch (uploadErr) {
          setErrors((prev) => ({ ...prev, photo: uploadErr.message }));
          setLoading(false);
          return;
        }
      }

      await registerUser(formData.email, formData.password);
      await updateUserProfile(formData.name.trim(), photoURL || "");
      navigate("/");
    } catch (err) {
      setServerError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col md:flex-row w-fit items-center justify-center gap-10 absolute inset-0 max-width'>
      <div>
        <h2 className='text-4xl md:text-5xl font-bold text-primary'>
          Register Now!
        </h2>
        <p className='mt-2.5'>
          Have an account already?{" "}
          <Link to={"/login"} className='link link-primary'>
            Login
          </Link>
        </p>
      </div>

      <form
        className='fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-4'
        onSubmit={handleRegister}
        noValidate
      >
        <legend className='fieldset-legend'>Register</legend>

        {serverError && (
          <div className='text-error text-sm mb-2 bg-error/10 px-3 py-2 rounded'>
            {serverError}
          </div>
        )}

        {/* Name */}
        <label className='label'>Name</label>
        <input
          type='text'
          name='name'
          className={`input w-full ${errors.name ? "input-error" : ""}`}
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span className='text-error text-xs mt-0.5'>{errors.name}</span>
        )}

        {/* Email */}
        <label className='label mt-2'>Email</label>
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

        {/* Photo */}
        <label className='label mt-2'>Photo</label>
        <div className='flex items-center gap-3'>
          {photoPreview && (
            <img
              src={photoPreview}
              alt='Preview'
              className='w-10 h-10 rounded-full object-cover border-2 border-base-300'
            />
          )}
          <input
            type='file'
            accept='image/*'
            className={`file-input file-input-sm flex-1 ${errors.photo ? "file-input-error" : ""}`}
            onChange={handlePhotoChange}
          />
        </div>
        {uploadingPhoto && (
          <span className='text-xs text-info mt-0.5'>Uploading photo...</span>
        )}
        {errors.photo && (
          <span className='text-error text-xs mt-0.5'>{errors.photo}</span>
        )}
        {!IMGBB_API_KEY && (
          <span className='text-warning text-xs mt-0.5'>
            ⚠ imgbb API key not set — photo upload disabled.
          </span>
        )}

        {/* Password */}
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

        {/* Confirm Password */}
        <label className='label mt-2'>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          className={`input w-full ${errors.confirmPassword ? "input-error" : ""}`}
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className='text-error text-xs mt-0.5'>
            {errors.confirmPassword}
          </span>
        )}

        <button
          type='submit'
          className='btn btn-neutral mt-4 w-full'
          disabled={loading || uploadingPhoto}
        >
          {loading ? (
            <span className='loading loading-spinner loading-sm'></span>
          ) : (
            "Register"
          )}
        </button>

        <div className='divider'>OR</div>

        <button
          type='button'
          className='btn bg-white text-black border-[#e5e5e5] w-full'
          disabled={loading}
          onClick={async () => {
            // Google sign-up handled in Login — redirect there
            navigate("/login");
          }}
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
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
