import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const recaptchaRef = React.createRef();

  <form onSubmit={handleSubmit}>
    <ReCAPTCHA
      ref={recaptchaRef}
      size="normal"
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET}
      onChange={onReCAPTCHAChange}
    />
    <input
      onChange={handleChange}
      required
      type="email"
      name="email"
      placeholder="Email"
    />
    <button type="submit">Register</button>
  </form>;
}
