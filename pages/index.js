import Head from "next/head";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter.svelte";
import { Student } from "../components/index";
import linkSvelte from "react-link-svelte";
import { useState } from "react";

const RCounter = linkSvelte(Counter);


export default function Home() {
  const [count, setCount] = useState(21);
  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count + 1)}>click</button>
      <RCounter count={count} />
    </div>
  );
}
